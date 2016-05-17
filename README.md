# FeedHenry Hello World MBaaS Server

This is a blank 'hello world' FeedHenry MBaaS. Use it as a starting point for building your APIs.

# Group Hello World API

# hello [/hello]

'Hello world' endpoint.

## hello [POST]

'Hello world' endpoint.

+ Request (application/json)
    + Body
            {
              "hello": "world"
            }

+ Response 200 (application/json)
    + Body
            {
              "msg": "Hello world"
            }

# hello [/bpm/loadTasks]

            'loadTasks' endpoint.

## loadTasks [POST]

'loadTasks' endpoint.

+ Request (application/json)
                + Body
                {
                  "username": "1",
                  "password": "1",
                  "ip": "ip",
                  "port": "port"
                }

            + Response 200 (application/json)
                + Body
                        {
                          "msg": "Hello world"
                        }
