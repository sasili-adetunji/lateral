import datetime
import json
import urllib2

from environs import Env
import requests
import tornado.ioloop
import tornado.web
import os.path


from tornado.options import define, options

define("port", default=8888, help="run on the given port", type=int)

env = Env()
env.read_env()


class Application(tornado.web.Application):
    def __init__(self):
        handlers = [
            (r"/", MainHandler),
            (r"/recommendations", MainHandler)
        ]
        settings = dict(
            cookie_secret="43oETzKXQAGaYdkL5gEmGeJJFuYh7EQnp2XdTP1o/Vo=",
            # template_path=os.path.join(os.path.dirname(__file__), "templates"),
            # static_path=os.path.join(os.path.dirname(__file__), "static"),
            xsrf_cookies=True,
        )
        tornado.web.Application.__init__(self, handlers, **settings)

class MainHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "*")
        self.set_header("Access-Control-Allow-Methods", "*")

    def get(self):
      self.write({ "message": datetime.datetime.now().strftime("%H:%M:%S") })

    def options(self):
        query = self.request.query
        body = {"text": urllib2.unquote(query)}
        url = 'https://news-api.lateral.io/documents/similar-to-text'
        payload = json.dumps(body)
        headers = {
            'subscription-key': env("apiKey"),
            'content-type': "application/json"
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        self.write(response.text)


def main():
    tornado.options.parse_command_line()
    app = Application()
    app.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    main()