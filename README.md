This application allows you see news and articles that are similar or related to a particular text. This is based on <a href="https://lateral.io">Lateral</a> api.

## Technologies used

The backend functionality of this web app being a <a href="https://www.python.org/">python</a> app depends on the following technologies.
- <a href="https://www.javascript.com/">JavaScript(ES6)</a>
- <a href="https://www.tornadoweb.org/en/stable/">Tornado</a>
- <a href="https://facebook.github.io/react/">ReactJs</a>: A javascript library for building user interfaces.

## Installation
- Download or clone the app on your local machine
- Move into local directory ```cd lateral```
- Install Virtual environement by running `pip install virtualenv`. This helps in isolating python packages from every project. This makes projects with conflicting dependecies to coeexist peacefully
- Create a vitual env by running `virtualenv venv`
- Activate virtual environment `source venv/bin/activate`
- Edit the `.env-sample` file and save it as `.env` with the correct apikey from <a href="https://lateral.io">Lateral</a>
- Install the python dependencies by running `pip install -r requirements.txt`
- Start the app by running `python lateral/app.py --port=8000`
- On another terminal Run ```cd client```
- Run ```npm install``` to install the node dependecies
- Edit the `.env-sample` file and save it as `.env` with the correct server url in this case `http://localhost:8000`
- Run `npm start` and Navigate to `http://localhost:3000` to view the application

## Author
This is done by ```Sasiliyu Adetunji```

## License & Copyright

MIT © <a href="https://github.com/sasili-adetuni">Sasiliyu Adetunji </a>

Licensed under the MIT License.

