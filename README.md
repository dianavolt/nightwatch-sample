# nightwatch-sample
Exploring nightwatch testing framework

Downloading Nightwatch on a Fresh Project:
```
npm install nightwatch --save-dev
npm install chromedriver --save-dev
```

**Downloading Dependencies:**
```npm install```

**Running test scripts:**
```npm test```

## Implementation on Windows Environment

When runnining on Windows the following error might be occur due to an unresolved path:

```
cannot resolve path: "./node_modules/.bin/chromedriver".
Please check that the "webdriver.server_path" config property is set correctly.
```

To resolve it ```nightwatch.conf.js``` file needs to be changed to the following:

```const chromedriver = require("chromedriver");
module.exports = (function (settings) {
  settings.test_workers = false;
  settings.webdriver.server_path = chromedriver.path;
  return settings;
})(require("./nightwatch.json"));
```

The ```nightwatch.conf.js``` content should be moved to ```nightwatch.json```

For instance:

```module.exports = {
    "src_folders" : ["tests"],
    
    "webdriver" : {
        "start_process": true,
        "server_path": "node_modules/.bin/chromedriver",
        "port": 9515
    },
    
    "test_settings" : {
        "default" : {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }    
}```


