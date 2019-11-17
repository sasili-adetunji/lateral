import unittest
import json
import mock
from tornado import ioloop, escape
from tornado.testing import AsyncHTTPTestCase, gen_test, gen
from lateral.app import *



class TestRecommendationsApi(AsyncHTTPTestCase):
    def get_app(self):
        self.app = Application()
        return self.app

    def test_get_endpoints(self):
        """
        Ensure we can get the time endpoint
        """
        get_response = self.fetch(
            '/',
            method='GET')
        self.assertEqual(get_response.code, 200)
        self.assertTrue('message' in get_response.body)

