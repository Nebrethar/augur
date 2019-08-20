define({ "api": [
  {
    "type": "post",
    "url": "/batch",
    "title": "Batch Requests",
    "name": "Batch",
    "group": "Batch",
    "description": "<p>Returns results of batch requests POST JSON of api requests</p>",
    "version": "0.0.0",
    "filename": "../augur/server.py",
    "groupTitle": "Batch"
  },
  {
    "type": "post",
    "url": "/batch",
    "title": "Batch Request Metadata",
    "name": "BatchMetadata",
    "group": "Batch",
    "description": "<p>Returns metadata of batch requests POST JSON of API requests metadata</p>",
    "version": "0.0.0",
    "filename": "../augur/server.py",
    "groupTitle": "Batch"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issues-closed-resolution-duration",
    "title": "Closed Issue Resolution Duration (Repo)",
    "name": "Closed_Issue_Resolution_Duration_Repo_",
    "group": "Evolution",
    "description": "<p>Duration of time for issues to be resolved. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/issues-closed-resolution-duration.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21682\n        \"repo_name\":\"incubator-dubbo\",\n        \"gh_issue_number\":4223,\n        \"issue_title\":\"Cloud Native PR\",\n        \"created_at\":\"2019-05-31T07:55:44.000Z\",\n        \"closed_at\":\"2019-06-17T03:12:48.000Z\",\n        \"diffdate\":16.0\n    },\n    {\n        \"repo_id\": 21682,\n         \"repo_name\":\"incubator-dubbo\",\n        \"gh_issue_number\":4131,\n        \"issue_title\":\"Reduce context switching cost by optimizing thread model on consumer side.\",\n        \"created_at\":\"2019-05-23T06:18:21.000Z\",\n        \"closed_at\":\"2019-06-03T08:07:27.000Z\",\n        \"diffdate\":11.0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issues-closed-resolution-duration",
    "title": "Closed Issue Resolution Duration (Repo Group)",
    "name": "Closed_Issue_Resolution_Duration_Repo_Group_",
    "group": "Evolution",
    "description": "<p>Duration of time for issues to be resolved. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/issues-closed-resolution-duration.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         \"repo_name\":\"incubator-dubbo\",\n         \"gh_issue_number\":4110,\n         \"issue_title\":\"rm incubating word\",\n         \"created_at\":\"2019-05-22T03:18:13.000Z\",\n         \"closed_at\":\"2019-05-22T05:27:29.000Z\",\n         \"diffdate\":0.0\n     },\n     {\n         \"repo_name\":\"incubator-dubbo\",\n         \"gh_issue_number\":4111,\n         \"issue_title\":\"nacos registry serviceName may conflict\",\n         \"created_at\":\"2019-05-22T03:30:23.000Z\",\n         \"closed_at\":\"2019-05-23T14:36:17.000Z\",\n         \"diffdate\":1.0\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issues-first-time-closed",
    "title": "Closed Issues New Contributors (Repo)",
    "name": "Closed_Issues_New_Contributors_Repo_",
    "group": "Evolution",
    "description": "<p>Number of persons closing an issue for the first time. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/issues-first-time-closed.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"issue_date\": \"2018-05-20T00:00:00.000Z\",\n        \"count\": 3,\n        \"repo_name\": \"rails\"\n    },\n    {\n        \"issue_date\": \"2019-06-03T00:00:00.000Z\",\n        \"count\": 23,\n        \"repo_name\": \"rails\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issues-first-time-closed",
    "title": "Closed Issues New Contributor (Repo Group)",
    "name": "Closed_Issues_New_Contributors_Repo_Group_",
    "group": "Evolution",
    "description": "<p>Number of persons closing an issue for the first time. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/issues-first-time-closed.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"issue_date\": \"2018-05-20T00:00:00.000Z\",\n        \"count\": 3,\n        \"repo_name\": \"rails\",\n        \"repo_id\": 21000\n    },\n    {\n        \"issue_date\": \"2019-06-03T00:00:00.000Z\",\n        \"count\": 23\n        \"repo_name\": \"rails\",\n        \"repo_id\": 21000\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/contributors",
    "title": "Contributors (Repo)",
    "name": "Contributors_Repo_",
    "group": "Evolution",
    "description": "<p>List of contributors and their contributions. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/contributors.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        \"user\": 1,\n        \"commits\": 0,\n        \"issues\": 2,\n        \"commit_comments\": 0,\n        \"issue_comments\": 0,\n        \"pull_requests\": 0,\n        \"pull_request_comments\": 0,\n        \"total\": 2\n    },\n    {\n        \"user\": 2,\n        \"commits\": 0,\n        \"issues\": 2,\n        \"commit_comments\": 0,\n        \"issue_comments\": 0,\n        \"pull_requests\": 0,\n        \"pull_request_comments\": 0,\n        \"total\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/contributors",
    "title": "Contributors (Repo Group)",
    "name": "Contributors_Repo_Group_",
    "group": "Evolution",
    "description": "<p>List of contributors and their contributions. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/contributors.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"user_id\": 1,\n        \"commits\": 0,\n        \"issues\": 2,\n        \"commit_comments\": 0,\n        \"issue_comments\": 0,\n        \"pull_requests\": 0,\n        \"pull_request_comments\": 0,\n        \"total\": 2,\n        \"repo_name\": \"rails\",\n        \"repo_id\": 21000\n    },\n    {\n        \"user_id\": 2,\n        \"commits\": 0,\n        \"issues\": 2,\n        \"commit_comments\": 0,\n        \"issue_comments\": 0,\n        \"pull_requests\": 0,\n        \"pull_request_comments\": 0,\n        \"total\": 2,\n        \"repo_name\": \"rails\",\n        \"repo_id\": 21000\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issues-maintainer-response-duration",
    "title": "Issue Response Time (Repo)",
    "name": "Issue_Response_Time_Repo_",
    "group": "Evolution",
    "description": "<p>Duration of time for issues to be resolved. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/issues-maintainer-response-duration.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         \"repo_id\": 21987,\n         \"repo_name\": \"qpid-proton\",\n         \"average_days_comment\": 27.1111111111\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issues-maintainer-response-duration",
    "title": "Issue Response Time (Repo Group)",
    "name": "Issue_Response_Time_Repo_Group_",
    "group": "Evolution",
    "description": "<p>Duration of time for issues to be resolved. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/issues-maintainer-response-duration.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         \"repo_id\": 21987,\n         \"repo_name\": \"qpid-proton\",\n         \"average_days_comment\": 27.1111111111\n     },\n     {\n         \"repo_id\": 22252,\n         \"repo_name\": \"cordova-create\",\n         \"average_days_comment\": 0.8\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/contributors-new",
    "title": "New Contributors (Repo)",
    "name": "New_Contributors_Repo_",
    "group": "Evolution",
    "description": "<p>Time series of number of new contributors during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/contributors-new.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"contribute_at\": \"2018-05-20T00:00:00.000Z\",\n        \"count\": 3,\n        \"repo_name\": \"rails\",\n        \"repo_id\": 21000\n    },\n    {\n        \"contribute_at\": \"2019-06-03T00:00:00.000Z\",\n        \"count\": 23,\n        \"repo_name\": \"rails\",\n        \"repo_id\": 21000\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/contributors-new",
    "title": "New Contributors (Repo Group)",
    "name": "New_Contributors_Repo_Group_",
    "group": "Evolution",
    "description": "<p>Time series of number of new contributors during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/contributors-new.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"contribute_at\": \"2018-05-20T00:00:00.000Z\",\n        \"count\": 3,\n        \"repo_name\": \"rails\",\n        \"repo_id\": 21000\n    },\n    {\n        \"contribute_at\": \"2019-06-03T00:00:00.000Z\",\n        \"count\": 23,\n        \"repo_name\": \"rails\",\n        \"repo_id\": 21000\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/pull-requests-merge-contributor-new",
    "title": "New Contributors of Commits (Repo)",
    "name": "New_Contributors_of_Commits_Repo_",
    "group": "Evolution",
    "description": "<p>Number of persons contributing with an accepted commit for the first time. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/pull-requests-merge-contributor-new.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"commit_date\": \"2018-01-01T00:00:00.000Z\",\n        \"count\": 2287,\n        \"repo_name\": \"rails\"\n    },\n    {\n        \"commit_date\": \"2018-02-01T00:00:00.000Z\",\n        \"count\": 1939,\n        \"repo_name\": \"rails\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/pull-requests-merge-contributor-new",
    "title": "New Contributors of Commits (Repo Group)",
    "name": "New_Contributors_of_Commits_Repo_Group_",
    "group": "Evolution",
    "description": "<p>Number of persons contributing with an accepted commit for the first time. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/pull-requests-merge-contributor-new.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"commit_date\": \"2018-01-01T00:00:00.000Z\",\n        \"count\": 5140,\n        \"repo_name\": \"rails\"\n    },\n    {\n        \"commit_date\": \"2019-01-01T00:00:00.000Z\",\n        \"commit_count\": 711,\n        \"repo_name\": \"rails\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issues-first-time-opened",
    "title": "New Contributors of Issues (Repo)",
    "name": "New_Contributors_of_Issues_Repo_",
    "group": "Evolution",
    "description": "<p>Number of persons opening an issue for the first time. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/issues-first-time-opened.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"issue_date\": \"2018-05-20T00:00:00.000Z\",\n        \"count\": 3,\n        \"repo_name\": \"rails\"\n    },\n    {\n        \"issue_date\": \"2019-06-03T00:00:00.000Z\",\n        \"count\": 23,\n        \"repo_name\": \"rails\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issues-first-time-opened",
    "title": "New Contributors of Issues (Repo Group)",
    "name": "New_Contributors_of_Issues_Repo_Group_",
    "group": "Evolution",
    "description": "<p>Number of persons opening an issue for the first time. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/issues-first-time-opened.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"issue_date\": \"2018-05-20T00:00:00.000Z\",\n        \"count\": 3,\n        \"repo_name\": \"rails\",\n        \"repo_id\": 21000\n    },\n    {\n        \"issue_date\": \"2019-06-03T00:00:00.000Z\",\n        \"count\": 23,\n        \"repo_name\": \"rails\",\n        \"repo_id\": 21000\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issues-open-age",
    "title": "Open Issue Age (Repo)",
    "name": "Open_Issue_Age_Repo_",
    "group": "Evolution",
    "description": "<p>Age of open issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/issues-open-age.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21000,\n        \"repo_name\": \"rails\",\n        \"issue_id\": 38318,\n        \"date\": \"2009-05-15T19:48:43.000Z\",\n        \"open_date\": 3696\n    },\n    {\n        \"repo_id\": 21000,\n        \"repo_name\": \"rails\",\n        \"issue_id\": 38317,\n        \"date\": \"2009-05-16T14:35:40.000Z\",\n        \"open_date\": 3695\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issues-open-age",
    "title": "Open Issue Age (Repo Group)",
    "name": "Open_Issue_Age_Repo_Group_",
    "group": "Evolution",
    "description": "<p>Age of open issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/issues-open-age.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21000,\n        \"repo_name\": \"rails\",\n        \"issue_id\": 38318,\n        \"date\": \"2009-05-15T19:48:43.000Z\",\n        \"open_date\": 3696\n    },\n    {\n        \"repo_id\": 21000,\n        \"repo_name\": \"rails\",\n        \"issue_id\": 38317,\n        \"date\": \"2009-05-16T14:35:40.000Z\",\n        \"open_date\": 3695\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/sub-projects",
    "title": "Sub-Projects (Repo)",
    "name": "Sub_Projects_Repo_",
    "group": "Evolution",
    "description": "<p>Number of sub-projects. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/sub-projects.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"sub_protject_count\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/sub-projects",
    "title": "Sub-Projects (Repo Group)",
    "name": "Sub_Projects_Repo_Group_",
    "group": "Evolution",
    "description": "<p>Number of sub-projects. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/sub-projects.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"sub_protject_count\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/closed-issues-count",
    "title": "Closed Issues Count (Repo)",
    "name": "closed_issues_count_repo",
    "group": "Evolution",
    "description": "<p>Count of closed issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/contributors-new.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21681,\n        \"closed_count\": 26,\n        \"date\": \"2018-11-26T00:00:00.000Z\"\n    },\n    {\n        \"repo_id\": 21681,\n        \"closed_count\": 14,\n        \"date\": \"2018-12-03T00:00:00.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/closed-issues-count",
    "title": "Closed Issues Count (Repo Group)",
    "name": "closed_issues_count_repo_group",
    "group": "Evolution",
    "description": "<p>Count of closed issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/contributors-new.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"rg_name\": \"Apache\",\n        \"closed_count\": 4,\n        \"date\": \"2014-06-02T00:00:00.000Z\"\n    },\n    {\n        \"rg_name\": \"Apache\",\n        \"closed_count\": 6,\n        \"date\": \"2014-06-09T00:00:00.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/code-changes-lines",
    "title": "Code Changes Lines (Repo)",
    "name": "code_changes_lines_repo",
    "group": "Evolution",
    "description": "<p>Time series of lines added &amp; removed during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Code_Changes_Lines.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"graphql-js\",\n        \"date\": \"2015-06-01T00:00:00.000Z\",\n        \"added\": 17613,\n        \"removed\": 106\n    },\n    {\n        \"repo_name\": \"graphql-js\",\n        \"date\": \"2015-07-01T00:00:00.000Z\",\n        \"added\": 9448,\n        \"removed\": 5081\n    },\n    {\n        \"repo_name\": \"graphql-js\",\n        \"date\": \"2015-08-01T00:00:00.000Z\",\n        \"added\": 6270,\n        \"removed\": 3833\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/code-changes-lines",
    "title": "Code Changes Lines (Repo Group)",
    "name": "code_changes_lines_repo_group",
    "group": "Evolution",
    "description": "<p>Time series of lines added &amp; removed during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Code_Changes_Lines.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21337,\n        \"repo_name\": \"graphql-wg\",\n        \"date\": \"2018-01-01T00:00:00.000Z\",\n        \"added\": 1135,\n        \"removed\": 101\n    },\n    {\n        \"repo_id\": 21337,\n        \"repo_name\": \"graphql-wg\",\n        \"date\": \"2019-01-01T00:00:00.000Z\",\n        \"added\": 872,\n        \"removed\": 76\n    },\n    {\n        \"repo_id\": 21338,\n        \"repo_name\": \"foundation\",\n        \"date\": \"2019-01-01T00:00:00.000Z\",\n        \"added\": 130,\n        \"removed\": 5\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/code-changes",
    "title": "Code Changes (Repo)",
    "name": "code_changes_repo",
    "group": "Evolution",
    "description": "<p>Time series number of commits during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Code_Changes.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"graphql\",\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"commit_count\": 90,\n    },\n    {\n        \"repo_name\": \"graphql\",\n        \"date\": \"2016-01-01T00:00:00.000Z\",\n        \"commit_count\": 955,\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/code-changes",
    "title": "Code Changes (Repo Group)",
    "name": "code_changes_repo_group",
    "group": "Evolution",
    "description": "<p>Time series of number of commits during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Code_Changes.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21337,\n        \"repo_name\": \"graphql-wg\",\n        \"date\": \"2018-01-01T00:00:00.000Z\",\n        \"commit_count\": 173\n    },\n    {\n        \"repo_id\": 21337,\n        \"repo_name\": \"graphql-wg\",\n        \"date\": \"2019-01-01T00:00:00.000Z\",\n        \"commit_count\": 92\n    },\n    {\n        \"repo_id\": 21338,\n        \"repo_name\": \"foundation\",\n        \"date\": \"2019-01-01T00:00:00.000Z\",\n        \"commit_count\": 8\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issue-backlog",
    "title": "Issue Backlog (Repo)",
    "name": "issue_backlog_repo",
    "group": "Evolution",
    "description": "<p>Number of issues currently open. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/focus_areas/code_development.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\":\"render_component\",\n        \"issue_backlog\": 3\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issue-backlog",
    "title": "Issue Backlog (Repo Group)",
    "name": "issue_backlog_repo_group",
    "group": "Evolution",
    "description": "<p>Number of issues currently open. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/focus_areas/code_development.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21055,\n        \"repo_name\": \"cache_digests\",\n        \"issue_backlog\": 21\n    },\n    {\n        \"repo_id\": 21056,\n        \"repo_name\": \"rails-dev-box\",\n        \"issue_backlog\": 1\n    },\n    {\n        \"repo_id\": 21058,\n        \"repo_name\": \"activerecord-session_store\",\n        \"issue_backlog\": 24\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issue-backlog",
    "title": "Issue Duration (Repo)",
    "name": "issue_duration_repo",
    "group": "Evolution",
    "description": "<p>Time since an issue is proposed until it is closed. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/focus_areas/code_development.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"exception_notification\",\n        \"issue_id\": 50306,\n        \"created_at\": \"2011-02-13T03:46:06.000Z\",\n        \"closed_at\": \"2011-04-14T23:27:33.000Z\",\n        \"duration\": \"60 days 19:41:27.000000000\"\n    },\n    {\n        \"repo_name\": \"exception_notification\",\n        \"issue_id\": 50308,\n        \"created_at\": \"2011-01-19T18:47:41.000Z\",\n        \"closed_at\": \"2013-12-09T13:51:03.000Z\",\n        \"duration\": \"1054 days 19:03:22.000000000\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issue-duration",
    "title": "Issue Duration (Repo Group)",
    "name": "issue_duration_repo_group",
    "group": "Evolution",
    "description": "<p>Time since an issue is proposed until it is closed. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/focus_areas/code_development.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21017,\n        \"repo_name\": \"ssl_requirement\",\n        \"issue_id\": 50320,\n        \"created_at\": \"2011-05-06T20:20:05.000Z\",\n        \"closed_at\": \"2011-05-06T20:21:47.000Z\",\n        \"duration\": \"0 days 00:01:42.000000000\"\n    },\n    {\n        \"repo_id\": 21027,\n        \"repo_name\": \"rails-contributors\",\n        \"issue_id\": 50328,\n        \"created_at\": \"2019-06-20T22:56:38.000Z\",\n        \"closed_at\": \"2019-06-21T20:17:28.000Z\",\n        \"duration\": \"0 days 21:20:50.000000000\"\n    },\n    {\n        \"repo_id\": 21027,\n        \"repo_name\": \"rails-contributors\",\n        \"issue_id\": 50329,\n        \"created_at\": \"2019-06-20T22:01:52.000Z\",\n        \"closed_at\": \"2019-06-22T02:29:03.000Z\",\n        \"duration\": \"1 days 04:27:11.000000000\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issue-participants",
    "title": "Issue Participants (Repo)",
    "name": "issue_participants_repo",
    "group": "Evolution",
    "description": "<p>How many persons participated in the discussion of issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/focus_areas/code_development.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"arel\",\n        \"issue_id\": 50796,\n        \"created_at\": \"2017-03-02T21:14:46.000Z\",\n        \"participants\": 1\n    },\n    {\n        \"repo_name\": \"arel\",\n        \"issue_id\": 50795,\n        \"created_at\": \"2017-03-24T15:39:08.000Z\",\n        \"participants\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issue-participants",
    "title": "Issue Participants (Repo Group)",
    "name": "issue_participants_repo_group",
    "group": "Evolution",
    "description": "<p>How many persons participated in the discussion of issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/focus_areas/code_development.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21027,\n        \"repo_name\": \"rails-contributors\",\n        \"issue_id\": 50328,\n        \"created_at\": \"2019-06-20T22:56:38.000Z\",\n        \"participants\": 1\n    },\n    {\n        \"repo_id\": 21030,\n        \"repo_name\": \"arel\",\n        \"issue_id\": 50796,\n        \"created_at\": \"2017-03-02T21:14:46.000Z\",\n        \"participants\": 1\n    },\n    {\n        \"repo_id\": 21030,\n        \"repo_name\": \"arel\",\n        \"issue_id\": 50795,\n        \"created_at\": \"2017-03-24T15:39:08.000Z\",\n        \"participants\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issue-throughput",
    "title": "Issue Throughput (Repo)",
    "name": "issue_throughput_repo",
    "group": "Evolution",
    "description": "<p>Ratio of issues closed to total issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/focus_areas/code_development.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"rails-contributors\",\n        \"throughput\": 0.997531\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issue-throughput",
    "title": "Issue Throughput (Repo Group)",
    "name": "issue_throughput_repo_group",
    "group": "Evolution",
    "description": "<p>Ratio of issues closed to total issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/focus_areas/code_development.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21681,\n        \"repo_name\": \"incubator-zipkin\",\n        \"throughput\": 0.819125\n    },\n    {\n        \"repo_id\": 21682,\n        \"repo_name\": \"incubator-dubbo\",\n        \"throughput\": 0.861896\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issues-active",
    "title": "Issues Active (Repo)",
    "name": "issues_active_repo",
    "group": "Evolution",
    "description": "<p>Time series of number of issues that showed some activity during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Issues_Active.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"rails\",\n        \"date\": \"2011-01-01T00:00:00.000Z\",\n        \"issues\": 30\n    },\n    {\n        \"repo_name\": \"rails\",\n        \"date\": \"2012-01-01T00:00:00.000Z\",\n        \"issues\": 116\n    },\n    {\n        \"repo_name\": \"rails\",\n        \"date\": \"2013-01-01T00:00:00.000Z\",\n        \"issues\": 479\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issues-active",
    "title": "Issues Active (Repo Group)",
    "name": "issues_active_repo_group",
    "group": "Evolution",
    "description": "<p>Time series of number of issues that showed some activity during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Issues_Active.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21039,\n        \"repo_name\": \"rails_xss\",\n        \"date\": \"2019-01-01T00:00:00.000Z\",\n        \"issues\": 18\n    },\n    {\n        \"repo_id\": 21041,\n        \"repo_name\": \"prototype-rails\",\n        \"date\": \"2019-01-01T00:00:00.000Z\",\n        \"issues\": 20\n    },\n    {\n        \"repo_id\": 21043,\n        \"repo_name\": \"sprockets-rails\",\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"issues\": 102\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issues-closed",
    "title": "Issues Closed (Repo)",
    "name": "issues_closed_repo",
    "group": "Evolution",
    "description": "<p>Time series of number of issues closed during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Issues_New.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"incubator-pagespeed-ngx\",\n        \"date\": \"2012-01-01T00:00:00.000Z\",\n        \"issues\": 97\n    },\n    {\n        \"repo_name\": \"incubator-pagespeed-ngx\",\n        \"date\": \"2013-01-01T00:00:00.000Z\",\n        \"issues\": 395\n    },\n    {\n        \"repo_name\": \"incubator-pagespeed-ngx\",\n        \"date\": \"2014-01-01T00:00:00.000Z\",\n        \"issues\": 265\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issues-closed",
    "title": "Issues Closed (Repo Group)",
    "name": "issues_closed_repo_group",
    "group": "Evolution",
    "description": "<p>Time series of number of issues closed during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Issues_Closed.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21681,\n        \"repo_name\": \"incubator-zipkin\",\n        \"date\": \"2019-01-01T00:00:00.000Z\",\n        \"issues\": 425\n    },\n    {\n        \"repo_id\": 21682,\n        \"repo_name\": \"incubator-dubbo\",\n        \"date\": \"2013-01-01T00:00:00.000Z\",\n        \"issues\": 7\n    },\n    {\n        \"repo_id\": 21682,\n        \"repo_name\": \"incubator-dubbo\",\n        \"date\": \"2014-01-01T00:00:00.000Z\",\n        \"issues\": 47\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/issues-new",
    "title": "Issues New (Repo)",
    "name": "issues_new_repo",
    "group": "Evolution",
    "description": "<p>Time series of number of new issues opened during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Issues_New.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"rails\",\n        \"date\": \"2015-01-01T00:00:00.000Z\",\n        \"issues\": 116\n    },\n    {\n        \"repo_name\": \"rails\",\n        \"date\": \"2016-01-01T00:00:00.000Z\",\n        \"issues\": 196\n    },\n    {\n        \"repo_name\": \"rails\",\n        \"date\": \"2017-01-01T00:00:00.000Z\",\n        \"issues\": 180\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/issues-new",
    "title": "Issues New (Repo Group)",
    "name": "issues_new_repo_group",
    "group": "Evolution",
    "description": "<p>Time series of number of new issues opened during a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Issues_New.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21000,\n        \"repo_name\": \"rails\",\n        \"date\": \"2019-01-01T00:00:00.000Z\",\n        \"issues\": 318\n    },\n    {\n        \"repo_id\": 21002,\n        \"repo_name\": \"acts_as_list\",\n        \"date\": \"2009-01-01T00:00:00.000Z\",\n        \"issues\": 1\n    },\n    {\n        \"repo_id\": 21002,\n        \"repo_name\": \"acts_as_list\",\n        \"date\": \"2010-01-01T00:00:00.000Z\",\n        \"issues\": 7\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/open-issues-count",
    "title": "Open Issues Count (Repo)",
    "name": "open_issues_count_repo",
    "group": "Evolution",
    "description": "<p>Count of open issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/contributors-new.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21681,\n        \"open_count\": 18,\n        \"date\": \"2019-04-15T00:00:00.000Z\"\n    },\n    {\n        \"repo_id\": 21681,\n        \"open_count\": 16,\n        \"date\": \"2019-04-22T00:00:00.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/open-issues-count",
    "title": "Open Issues Count (Repo Group)",
    "name": "open_issues_count_repo_group",
    "group": "Evolution",
    "description": "<p>Count of open issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/contributors-new.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"rg_name\": \"Netflix\",\n        \"open_count\": 1,\n        \"date\": \"2017-09-11T00:00:00.000Z\"\n    },\n    {\n        \"rg_name\": \"Netflix\",\n        \"open_count\": 4,\n        \"date\": \"2019-06-10T00:00:00.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/review-duration",
    "title": "review Duration (Repo)",
    "name": "review_duration_repo",
    "group": "Evolution",
    "description": "<p>Time since an review/pull request is proposed until it is accepted. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Reviews_Duration.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"pull_request_id\": 25374,\n        \"created_at\": \"2019-01-02T11:02:08.000Z\",\n        \"merged_at\": \"2019-07-05T09:10:45.000Z\",\n        \"duration\": \"183 days 22:08:37.000000000\"\n    },\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"pull_request_id\": 25378,\n        \"created_at\": \"2019-03-28T13:44:04.000Z\",\n        \"merged_at\": \"2019-07-03T23:10:36.000Z\",\n        \"duration\": \"97 days 09:26:32.000000000\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/review-duration",
    "title": "Review Duration (Repo Group)",
    "name": "review_duration_repo_group",
    "group": "Evolution",
    "description": "<p>Time since an review/pull request is proposed until it is accepted. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Reviews_Duration.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21035,\n        \"repo_name\": \"prototype-ujs\",\n        \"pull_request_id\": 25386,\n        \"created_at\": \"2010-09-28T19:07:15.000Z\",\n        \"merged_at\": \"2010-09-29T17:46:59.000Z\",\n        \"duration\": \"0 days 22:39:44.000000000\"\n    },\n    {\n        \"repo_id\": 21042,\n        \"repo_name\": \"pjax_rails\",\n        \"pull_request_id\": 25392,\n        \"created_at\": \"2011-05-18T14:11:23.000Z\",\n        \"merged_at\": \"2011-05-18T19:03:01.000Z\",\n        \"duration\": \"0 days 04:51:38.000000000\"\n    },\n    {\n        \"repo_id\": 21042,\n        \"repo_name\": \"pjax_rails\",\n        \"pull_request_id\": 25396,\n        \"created_at\": \"2011-05-25T10:09:01.000Z\",\n        \"merged_at\": \"2011-05-25T19:30:01.000Z\",\n        \"duration\": \"0 days 09:21:00.000000000\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/reviews-accepted",
    "title": "Reviews Accepted (Repo)",
    "name": "reviews_accepted_repo",
    "group": "Evolution",
    "description": "<p>Time series of number of accepted reviews / pull requests opened within a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Reviews_Accepted.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"date\": \"2016-01-01T00:00:00.000Z\",\n        \"pull_requests\": 30\n    },\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"date\": \"2017-01-01T00:00:00.000Z\",\n        \"pull_requests\": 37\n    },\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"date\": \"2018-01-01T00:00:00.000Z\",\n        \"pull_requests\": 46\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/reviews-accepted",
    "title": "Reviews Accepted (Repo Group)",
    "name": "reviews_accepted_repo_group",
    "group": "Evolution",
    "description": "<p>Time series of number of accepted reviews / pull requests opened within a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Reviews_Accepted.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21035,\n        \"repo_name\": \"prototype-ujs\",\n        \"date\": \"2010-01-01T00:00:00.000Z\",\n        \"pull_requests\": 1\n    },\n    {\n        \"repo_id\": 21042,\n        \"repo_name\": \"pjax_rails\",\n        \"date\": \"2011-01-01T00:00:00.000Z\",\n        \"pull_requests\": 4\n    },\n    {\n        \"repo_id\": 21042,\n        \"repo_name\": \"pjax_rails\",\n        \"date\": \"2012-01-01T00:00:00.000Z\",\n        \"pull_requests\": 4\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/reviews-declined",
    "title": "Reviews Declined (Repo)",
    "name": "reviews_declined_repo",
    "group": "Evolution",
    "description": "<p>Time series of number of declined reviews / pull requests opened within a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Reviews_Accepted.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"date\": \"2016-01-01T00:00:00.000Z\",\n        \"pull_requests\": 11\n    },\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"date\": \"2017-01-01T00:00:00.000Z\",\n        \"pull_requests\": 16\n    },\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"date\": \"2018-01-01T00:00:00.000Z\",\n        \"pull_requests\": 4\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/reviews-declined",
    "title": "Reviews Declined (Repo Group)",
    "name": "reviews_declined_repo_group",
    "group": "Evolution",
    "description": "<p>Time series of number of declined reviews / pull requests opened within a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/Reviews_Accepted.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21035,\n        \"repo_name\": \"prototype-ujs\",\n        \"date\": \"2010-01-01T00:00:00.000Z\",\n        \"pull_requests\": 1\n    },\n    {\n        \"repo_id\": 21042,\n        \"repo_name\": \"pjax_rails\",\n        \"date\": \"2011-01-01T00:00:00.000Z\",\n        \"pull_requests\": 3\n    },\n    {\n        \"repo_id\": 21042,\n        \"repo_name\": \"pjax_rails\",\n        \"date\": \"2012-01-01T00:00:00.000Z\",\n        \"pull_requests\": 6\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/reviews",
    "title": "Reviews (Repo)",
    "name": "reviews_repo",
    "group": "Evolution",
    "description": "<p>Time series of number of new reviews / pull requests opened within a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/reviews.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"date\": \"2016-01-01T00:00:00.000Z\",\n        \"pull_requests\": 37\n    },\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"date\": \"2017-01-01T00:00:00.000Z\",\n        \"pull_requests\": 49\n    },\n    {\n        \"repo_name\": \"graphql-spec\",\n        \"date\": \"2018-01-01T00:00:00.000Z\",\n        \"pull_requests\": 63\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/reviews",
    "title": "Reviews (Repo Group)",
    "name": "reviews_repo_group",
    "group": "Evolution",
    "description": "<p>Time series of number of new reviews / pull requests opened within a certain period. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/reviews.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "day",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21035,\n        \"repo_name\": \"prototype-ujs\",\n        \"date\": \"2010-01-01T00:00:00.000Z\",\n        \"pull_requests\": 1\n    },\n    {\n        \"repo_id\": 21035,\n        \"repo_name\": \"prototype-ujs\",\n        \"date\": \"2011-01-01T00:00:00.000Z\",\n        \"pull_requests\": 5\n    },\n    {\n        \"repo_id\": 21042,\n        \"repo_name\": \"pjax_rails\",\n        \"date\": \"2011-01-01T00:00:00.000Z\",\n        \"pull_requests\": 16\n    },\n    {\n        \"repo_id\": 21042,\n        \"repo_name\": \"pjax_rails\",\n        \"date\": \"2012-01-01T00:00:00.000Z\",\n        \"pull_requests\": 14\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Evolution"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/lines-changed-by-author",
    "title": "Lines Changed by Author(Repo)",
    "group": "Experimental",
    "description": "<p>Returns number of lines changed per author per day</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"cmt_author_email\": \"david@loudthinking.com\",\n        \"cmt_author_date\": \"2004-11-24\",\n        \"affiliation\": \"NULL\",\n        \"additions\": 25611,\n        \"deletions\": 296,\n        \"whitespace\": 5279\n    },\n    {\n        \"cmt_author_email\": \"david@loudthinking.com\",\n        \"cmt_author_date\": \"2004-11-25\",\n        \"affiliation\": \"NULL\",\n        \"additions\": 163,\n        \"deletions\": 179,\n        \"whitespace\": 46\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental",
    "name": "GetRepoGroupsRepo_group_idLinesChangedByAuthor"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/lines-changed-by-author",
    "title": "Lines Changed by Author(Repo)",
    "group": "Experimental",
    "description": "<p>Count of closed issues. <a href=\"https://github.com/chaoss/wg-evolution/blob/master/metrics/contributors-new.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"cmt_author_email\": \"david@loudthinking.com\",\n        \"cmt_author_date\": \"2004-11-24\",\n        \"affiliation\": \"NULL\",\n        \"additions\": 25611,\n        \"deletions\": 296,\n        \"whitespace\": 5279\n    },\n    {\n        \"cmt_author_email\": \"david@loudthinking.com\",\n        \"cmt_author_date\": \"2004-11-25\",\n        \"affiliation\": \"NULL\",\n        \"additions\": 163,\n        \"deletions\": 179,\n        \"whitespace\": 46\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental",
    "name": "GetRepoGroupsRepo_group_idLinesChangedByAuthor"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/aggregate-summary",
    "title": "Aggregate Summary (Repo)",
    "name": "aggregate_summary_repo",
    "group": "Experimental",
    "description": "<p>Returns the current count of watchers, stars, and forks and the counts of all commits, committers, and pull requests merged between a given beginning and end date (default between now and 365 days ago).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"watcher_count\": 83,\n        \"star_count\": 581,\n        \"fork_count\": 449,\n        \"merged_count\": 0,\n        \"committer_count\": 5,\n        \"commit_count\": 133\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/aggregate-summary",
    "title": "Aggregate Summary (Repo Group)",
    "name": "aggregate_summary_repo_group",
    "group": "Experimental",
    "description": "<p>Returns the current count of watchers, stars, and forks and the counts of all commits, committers, and pull requests merged between a given beginning and end date (default between now and 365 days ago).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"watcher_count\": 69106,\n        \"star_count\": 460447,\n        \"fork_count\": 226841,\n        \"merged_count\": 3883,\n        \"committer_count\": 8553,\n        \"commit_count\": 7890143\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/annual-commit-count-ranked-by-new-repo-in-repo-group",
    "title": "Annual Commit Count Ranked by New Repo in Repo Group(Repo)",
    "name": "annual_commit_count_ranked_by_new_repo_in_repo_group",
    "group": "Experimental",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: Git Repository</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_url_base",
            "description": "<p>Base64 version of the URL of the GitHub repository as it appears in the Facade DB</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repos_id\": 1,\n        \"net\": 2479124,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji\"\n    },\n    {\n        \"repos_id\": 63,\n        \"net\": 2477911,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji-1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/annual-commit-count-ranked-by-new-repo-in-repo-group",
    "title": "Annual Commit Count Ranked by New Repo in Repo Group(Repo Group)",
    "name": "annual_commit_count_ranked_by_new_repo_in_repo_group",
    "group": "Experimental",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: Git Repository</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_url_base",
            "description": "<p>Base64 version of the URL of the GitHub repository as it appears in the Facade DB</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repos_id\": 1,\n        \"net\": 2479124,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji\"\n    },\n    {\n        \"repos_id\": 63,\n        \"net\": 2477911,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji-1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/annual-commit-count-ranked-by-repo-in-repo-group",
    "title": "Annual Commit Count Ranked by Repo in Repo Group(Repo)",
    "name": "annual_commit_count_ranked_by_repo_in_repo_group",
    "group": "Experimental",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: Git Repository</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_url_base",
            "description": "<p>Base64 version of the URL of the GitHub repository as it appears in the Facade DB</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repos_id\": 1,\n        \"net\": 2479124,\n        \"patches\": 1,\n        \"name\": \"twemoji\"\n    },\n    {\n        \"repos_id\": 63,\n        \"net\": 2477911,\n        \"patches\": 1,\n        \"name\": \"twemoji-1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/annual-commit-count-ranked-by-repo-in-repo-group",
    "title": "Annual Commit Count Ranked by Repo in Repo Group(Repo Group)",
    "name": "annual_commit_count_ranked_by_repo_in_repo_group",
    "group": "Experimental",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: Git Repository</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_url_base",
            "description": "<p>Base64 version of the URL of the GitHub repository as it appears in the Facade DB</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repos_id\": 1,\n        \"net\": 2479124,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji\"\n    },\n    {\n        \"repos_id\": 63,\n        \"net\": 2477911,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji-1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/annual-lines-of-code-count-ranked-by-new-repo-in-repo-group",
    "title": "Annual Lines of Code Ranked by New Repo in Repo Group(Repo Group)",
    "name": "annual_lines_of_code_count_ranked_by_new_repo_in_repo_group",
    "group": "Experimental",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: Git Repository</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_url_base",
            "description": "<p>Base64 version of the URL of the GitHub repository as it appears in the Facade DB</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repos_id\": 1,\n        \"net\": 2479124,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji\"\n    },\n    {\n        \"repos_id\": 63,\n        \"net\": 2477911,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji-1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/annual-lines-of-code-count-ranked-by-new-repo-in-repo-group",
    "title": "Annual Lines of Code Ranked by New Repo in Repo Group(Repo)",
    "name": "annual_lines_of_code_count_ranked_by_new_repo_in_repo_group",
    "group": "Experimental",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: Git Repository</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_url_base",
            "description": "<p>Base64 version of the URL of the GitHub repository as it appears in the Facade DB</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repos_id\": 1,\n        \"net\": 2479124,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji\"\n    },\n    {\n        \"repos_id\": 63,\n        \"net\": 2477911,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji-1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/annual-lines-of-code-count-ranked-by-repo-in-repo-group",
    "title": "Annual Lines of Code Ranked by Repo in Repo Group(Repo Group)",
    "name": "annual_lines_of_code_count_ranked_by_repo_in_repo_group",
    "group": "Experimental",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: Git Repository</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_url_base",
            "description": "<p>Base64 version of the URL of the GitHub repository as it appears in the Facade DB</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repos_id\": 1,\n        \"net\": 2479124,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji\"\n    },\n    {\n        \"repos_id\": 63,\n        \"net\": 2477911,\n        \"patches\": 1,\n        \"repo_name\": \"twemoji-1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/annual-lines-of-code-count-ranked-by-repo-in-repo-group",
    "title": "Annual Lines of Code Ranked by Repo in Repo Group(Repo)",
    "name": "annual_lines_of_code_count_ranked_by_repo_in_repo_group",
    "group": "Experimental",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: Git Repository</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo_url_base",
            "description": "<p>Base64 version of the URL of the GitHub repository as it appears in the Facade DB</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repos_id\": 1,\n        \"net\": 2479124,\n        \"patches\": 1,\n        \"name\": \"twemoji\"\n    },\n    {\n        \"repos_id\": 63,\n        \"net\": 2477911,\n        \"patches\": 1,\n        \"name\": \"twemoji-1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/pull-request-acceptance-rate",
    "title": "Pull Request Acceptance Rate (Repo)",
    "name": "pull_request_acceptance_rate_repo",
    "group": "Experimental",
    "description": "<p>Timeseries of pull request acceptance rate (expressed as the ratio of pull requests merged on a date to the count of pull requests opened on a date)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2019-01-01T00:00:00.000Z\",\n        \"rate\": 5.3333333333\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/pull-request-acceptance-rate",
    "title": "Pull Request Acceptance Rate (Repo Group)",
    "name": "pull_request_acceptance_rate_repo_group",
    "group": "Experimental",
    "description": "<p>Timeseries of pull request acceptance rate (expressed as the ratio of pull requests merged on a date to the count of pull requests opened on a date)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "group_by",
            "defaultValue": "week",
            "description": "<p>Allows for results to be grouped by day, week, month, or year. E.g. values: <code>year</code>, <code>day</code>, <code>month</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2019-02-11T00:00:00.000Z\",\n        \"rate\": 120.5\n    },\n    {\n        \"date\": \"2019-02-18T00:00:00.000Z\",\n        \"rate\": 34\n    },\n    {\n        \"date\": \"2019-02-25T00:00:00.000Z\",\n        \"rate\": 38.6666666667\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/top-committers",
    "title": "Top Committers (Repo)",
    "name": "top_committers_repo",
    "group": "Experimental",
    "description": "<p>Returns a list of contributors contributing N% of all commits.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "year",
            "description": "<p>Specify the year to return the results for. Default value: <code>current year</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "threshold",
            "defaultValue": "0.5",
            "description": "<p>Specify N%. Accepts a value between <code>0</code> &amp; <code>1</code> where <code>0</code> specifies <code>0%</code> and <code>1</code> specifies <code>100%</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21334,\n        \"repo_name\": \"graphql\",\n        \"email\": \"caniszczyk@gmail.com\",\n        \"commits\": 4\n    },\n    {\n        \"repo_id\": 21334,\n        \"repo_name\": \"graphql\",\n        \"email\": \"richard.j.schulte@gmail.com\",\n        \"commits\": 3\n    },\n    {\n        \"repo_id\": \"21334\",\n        \"repo_name\": \"graphql\",\n        \"email\": \"other_contributors\",\n        \"commits\": 5\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/top-committers",
    "title": "Top Committers (Repo Group)",
    "name": "top_committers_repo_group",
    "group": "Experimental",
    "description": "<p>Returns a list of contributors contributing N% of all commits.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "year",
            "description": "<p>Specify the year to return the results for. Default value: <code>current year</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "threshold",
            "defaultValue": "0.5",
            "description": "<p>Specify N%. Accepts a value between <code>0</code> &amp; <code>1</code> where <code>0</code> specifies <code>0%</code> and <code>1</code> specifies <code>100%</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_group_id\": 20,\n        \"repo_group_name\": \"Rails\",\n        \"email\": \"kamipo@gmail.com\",\n        \"commits\": 502\n    },\n    {\n        \"repo_group_id\": 20,\n        \"repo_group_name\": \"Rails\",\n        \"email\": \"rafaelmfranca@gmail.com\",\n        \"commits\": 246\n    },\n    {\n        \"repo_group_id\": 20,\n        \"repo_group_name\": \"Rails\",\n        \"email\": \"kaspth@gmail.com\",\n        \"commits\": 119\n    },\n    {\n        \"repo_group_id\": \"20\",\n        \"repo_group_name\": \"Rails\",\n        \"email\": \"other_contributors\",\n        \"commits\": 1774\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Experimental"
  },
  {
    "type": "get",
    "url": "metrics/status/filter?ID=:ID&tag=:tag&group=:group&backend_status=:backend_status&frontend_status=:frontend_status&source=:source&metric_type=:metric_type&is_defined=:is_defined",
    "title": "Filtered Metrics Status",
    "name": "filter_metrics_status",
    "group": "Metrics_Status",
    "description": "<p>Metrics Status that allows for filtering of the results via the query string. Filters can be combined.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tag",
            "description": "<p>Returns all the statuses of all metrics that have this tag</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "group",
            "description": "<p>Returns all the metrics in this metric grouping</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"unimplemented\"",
              "\"undefined\"",
              "\"implemented\""
            ],
            "optional": true,
            "field": "backend_status",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"unimplemented\"",
              "\"implemented\""
            ],
            "optional": true,
            "field": "frontend_status",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "source",
            "description": "<p>Returns the statuses of all metrics from this data source</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "metric_type",
            "description": "<p>Returns the statuses of the metrics of this metric type</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": true,
            "field": "is_defined",
            "description": "<p>Returns the statuses of metrics that are or aren't defined</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample Query String: ",
          "content": "metrics/status/filter?group=evolution&metric_type=metric",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[  \n    {  \n        \"tag\":\"reviews-duration\",\n        \"group\":\"evolution\",\n        \"name\":\"Reviews_Duration\",\n        \"backend_status\":\"unimplemented\",\n        \"frontend_status\":\"unimplemented\",\n        \"endpoint_repo\":null,\n        \"endpoint_rg\":null,\n        \"source\":null,\n        \"metric_type\":null,\n        \"is_defined\":true,\n        \"working_group\":\"evolution\"\n    },\n    {  \n        \"tag\":\"pull-requests-merged\",\n        \"group\":\"evolution\",\n        \"name\":\"Pull Requests Merged\",\n        \"backend_status\":\"unimplemented\",\n        \"frontend_status\":\"unimplemented\",\n        \"endpoint_repo\":null,\n        \"endpoint_rg\":null,\n        \"source\":null,\n        \"metric_type\":null,\n        \"is_defined\":false,\n        \"working_group\":\"evolution\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/metrics_status/routes.py",
    "groupTitle": "Metrics_Status"
  },
  {
    "type": "get",
    "url": "metrics/status",
    "title": "Metrics Status",
    "name": "metrics_status",
    "group": "Metrics_Status",
    "description": "<p>Information about the Augur implementation status of CHAOSS metrics.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {  \n        \"tag\":\"committers\",\n        \"group\":\"wg-risk\",\n        \"name\":\"Committers\",\n        \"backend_status\":\"implemented\",\n        \"frontend_status\":\"unimplemented\",\n        \"endpoint_repo\":\"/api/unstable/repo-groups/<repo_group_id>/repos/<repo_id>/committers\",\n        \"endpoint_rg\":\"/api/unstable/repo-groups/<repo_group_id>/committers\",\n        \"source\":\"augur_db\",\n        \"metric_type\":\"metric\",\n        \"is_defined\":true,\n        \"working_group\":\"wg-risk\"\n    },\n    {  \n        \"tag\":\"pull-requests-merged\",\n        \"group\":\"wg-evolution\",\n        \"name\":\"Pull Requests Merged\",\n        \"backend_status\":\"unimplemented\",\n        \"frontend_status\":\"unimplemented\",\n        \"endpoint_repo\":null,\n        \"endpoint_rg\":null,\n        \"source\":null,\n        \"metric_type\":null,\n        \"is_defined\":false,\n        \"working_group\":\"wg-evolution\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/metrics_status/routes.py",
    "groupTitle": "Metrics_Status"
  },
  {
    "type": "get",
    "url": "metrics/status/metadata",
    "title": "Metrics Status Metadata",
    "name": "metrics_status_metadata",
    "group": "Metrics_Status",
    "description": "<p>Metadata about the Augur implemntation status of CHAOSS metrics.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"groups\":{  \n        \"evolution\":\"Evolution\",\n        \"diversity-inclusion\":\"Diversity and Inclusion metrics\",\n        \"value\":\"Value\",\n        \"risk\":\"Risk\",\n        \"common\":\"Common\",\n        \"experimental\":\"Experimental\",\n        \"all\":\"All\"\n    },\n    \"data_sources\":[  \n        \"githubapi\",\n        \"librariesio\",\n        \"ghtorrent\",\n        \"downloads\",\n        \"facade\",\n        \"augur_db\"\n    ],\n    \"metric_types\":[  \n        \"timeseries\",\n        \"git\",\n        \"metric\"\n    ],\n    \"tags\":[  \n        \"\\\"alternative-packages\\\"\",\n        \"\\\"organizations\\\"\",\n        \"\\\"contribution-type\\\"\",\n            ...\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/metrics_status/routes.py",
    "groupTitle": "Metrics_Status"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/avgerage-issue-resolution-time",
    "title": "Average Issue Resolution Time (Repo)",
    "name": "average_issue_resolution_time_repo",
    "group": "Risk",
    "description": "<p>The average issue resolution time. <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/business-risk.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"maven-release\",\n        \"avg_issue_resolution_time\": \"276 days 13:54:13.2\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/avgerage-issue-resolution-time",
    "title": "Average Issue Resolution Time (Repo Group)",
    "name": "average_issue_resolution_time_repo_group",
    "group": "Risk",
    "description": "<p>The average issue resolution time. <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/business-risk.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21353,\n        \"repo_name\": \"open_id_authentication\",\n        \"avg_issue_resolution_time\": \"1413 days 15:39:48\"\n    },\n    {\n        \"repo_id\": 21362,\n        \"repo_name\": \"country_select\",\n        \"avg_issue_resolution_time\": \"140 days 09:37:58.2\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/cii-best-practices-badge",
    "title": "CII Best Practices Badge (Repo)",
    "name": "cii_best_practices_badge_repo",
    "group": "Risk",
    "description": "<p>The CII Best Practices Badge level. <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/security.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"trickster\",\n        \"badge_level\": \"passing\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/cii-best-practices-badge",
    "title": "CII Best Practices Badge (Repo Group)",
    "name": "cii_best_practices_badge_repo_group",
    "group": "Risk",
    "description": "<p>The CII Best Practices Badge level. <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/security.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21252,\n        \"repo_name\": \"php-legal-licenses\",\n        \"badge_level\": \"in_progress\"\n    },\n    {\n        \"repo_id\": 21277,\n        \"repo_name\": \"trickster\",\n        \"badge_level\": \"passing\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/committers",
    "title": "Committers(Repo)",
    "name": "committers_repo",
    "group": "Risk",
    "description": "<p>Number of persons contributing with an accepted commit for the first time. <a href=\"https://github.com/chaoss/wg-risk/blob/master/metrics/Committers.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "week",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\":\"2018-10-25T00:00:00.000Z\",\n        \"repo_name\":\"weasel\",\n        \"rg_name\":\"Comcast\",\n        \"count\":1\n    },\n    {\n        \"date\":\"2018-10-17T00:00:00.000Z\",\"repo_name\":\"weasel\",\"rg_name\":\"Comcast\",\"count\":11\n    },\n    {\n        \"date\":\"2018-06-21T00:00:00.000Z\",\n        \"repo_name\":\"weasel\",\n        \"rg_name\":\"Comcast\",\n        \"count\":6\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/Committers",
    "title": "(Repo Group)",
    "name": "committers_repo_group",
    "group": "Risk",
    "description": "<p>Number of persons opening an issue for the first time. <a href=\"https://github.com/chaoss/wg-risk/blob/master/metrics/Committers.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week",
              "month",
              "year"
            ],
            "optional": true,
            "field": "period",
            "defaultValue": "week",
            "description": "<p>Periodicity specification.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "begin_date",
            "defaultValue": "1970-1-1 0:0:0",
            "description": "<p>Beginning date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "end_date",
            "defaultValue": "current date",
            "description": "<p>Ending date specification. E.g. values: <code>2018</code>, <code>2018-05</code>, <code>2019-05-01</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2007-01-01T00:00:00.000Z\",\n        \"rg_name\": \"Comcast\",\n        \"count\": 372\n    },\n    {\n        \"date\": \"2008-01-01T00:00:00.000Z\",\n        \"rg_name\": \"Comcast\",\n        \"count\": 964\n    },\n    {\n        \"date\": \"2009-01-01T00:00:00.000Z\",\n        \"rg_name\": \"Comcast\",\n        \"count\": 28038\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/fork-count",
    "title": "Fork Count (Repo)",
    "name": "fork_count_repo",
    "group": "Risk",
    "description": "<p>Fork count. <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/business-risk.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"graphiql\",\n        \"forks\": 844\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/fork-count",
    "title": "Fork Count (Repo Group)",
    "name": "fork_count_repo_group",
    "group": "Risk",
    "description": "<p>Fork count. <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/business-risk.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21364,\n        \"repo_name\": \"irs_process_scripts\",\n        \"forks\": 4\n    },\n    {\n        \"repo_id\": 21420,\n        \"repo_name\": \"ruby-coffee-script\",\n        \"forks\": 54\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/forks",
    "title": "Forks (Repo)",
    "name": "forks_repo",
    "group": "Risk",
    "description": "<p>A time series of fork count. <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/business-risk.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"graphiql\",\n        \"date\": \"2019-07-03T23:27:42.000Z\",\n        \"forks\": 843\n    },\n    {\n        \"repo_name\": \"graphiql\",\n        \"date\": \"2019-07-04T16:40:44.000Z\",\n        \"forks\": 844\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/forks",
    "title": "Forks (Repo Group)",
    "name": "forks_repo_group",
    "group": "Risk",
    "description": "<p>A time series of fork count. <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/business-risk.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21036,\n        \"repo_name\": \"jquery-ujs\",\n        \"date\": \"2019-07-03T23:26:42.000Z\",\n        \"forks\": 519\n    },\n    {\n        \"repo_id\": 21036,\n        \"repo_name\": \"jquery-ujs\",\n        \"date\": \"2019-07-04T16:39:39.000Z\",\n        \"forks\": 519\n    },\n    {\n        \"repo_id\": 21039,\n        \"repo_name\": \"rails_xss\",\n        \"date\": \"2019-07-03T23:26:22.000Z\",\n        \"forks\": 20\n    },\n    {\n        \"repo_id\": 21039,\n        \"repo_name\": \"rails_xss\",\n        \"date\": \"2019-07-04T16:39:20.000Z\",\n        \"forks\": 20\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/languages",
    "title": "Languages (Repo)",
    "name": "languages_repo",
    "group": "Risk",
    "description": "<p>The primary language of the repository. <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/security.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"primary_language\":\"PHP\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/languages",
    "title": "Languages (Repo Group)",
    "name": "languages_repo_group",
    "group": "Risk",
    "description": "<p>The primary language of the repository. <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/security.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21277,\n        \"primary_language\": \"Go\"\n    },\n    {\n        \"repo_id\": 21252,\n        \"primary_language\": \"PHP\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/license-count",
    "title": "License Count (Repo)",
    "name": "license_count_repo",
    "group": "Risk",
    "description": "<p>The declared software package license (fetched from CII Best Practices badging data). <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/licensing.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    [\n        {\n            \"name\": \"zucchini\",\n            \"number_of_license\": 2,\n            \"file_without_licenses\": true\n        }\n    ]\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/license-count",
    "title": "License Count (Repo Group)",
    "name": "license_count_repo_group",
    "group": "Risk",
    "description": "<p>The declared software package license (fetched from CII Best Practices badging data). <a href=\"https://github.com/chaoss/wg-risk/blob/master/focus-areas/licensing.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"name\": \"ActorServiceRegistry\",\n        \"number_of_license\": 2,\n        \"file_without_licenses\": true\n    },\n    {\n        \"name\": \"adyen-api\",\n        \"number_of_license\": 1,\n        \"file_without_licenses\": true\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/license-coverage",
    "title": "License Coverage(Repo)",
    "name": "license_coverage_repo",
    "group": "Risk",
    "description": "<p>Number of persons contributing with an accepted commit for the first time. <a href=\"https://github.com/chaoss/wg-risk/blob/master/metrics/License_Coverage.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"zucchini\",\n        \"total_files\": 95,\n        \"license_declared_file\": 33,\n        \"coverage\": 0.347\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/license-coverage",
    "title": "License Coverage(Repo Group)",
    "name": "license_coverage_repo_group",
    "group": "Risk",
    "description": "<p>Number of persons opening an issue for the first time. <a href=\"https://github.com/chaoss/wg-risk/blob/master/metrics/License_Coverage.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"name\": \"ActorServiceRegistry\",\n        \"total_files\": 51,\n        \"license_declared_files\": 19,\n        \"coverage\": 0.373\n    },\n    {\n        \"name\": \"adyen-api\",\n        \"total_files\": 92,\n        \"license_declared_files\": 55,\n        \"coverage\": 0.598\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/license-declared",
    "title": "License Declared(Repo)",
    "name": "license_declared_repo",
    "group": "Risk",
    "description": "<p>Number of persons contributing with an accepted commit for the first time. <a href=\"https://github.com/chaoss/wg-risk/blob/master/metrics/License_Coverage.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"name\": \"trickster\",\n        \"short_name\": \"Apache-2.0\",\n        \"note\": \"\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/license-declared",
    "title": "License Declared(Repo Group)",
    "name": "license_declared_repo_group",
    "group": "Risk",
    "description": "<p>Number of persons opening an issue for the first time. <a href=\"https://github.com/chaoss/wg-risk/blob/master/metrics/License_Coverage.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n   {\n        \"name\": \"trickster\",\n        \"short_name\": \"Apache-2.0\",\n        \"note\": \"\"\n    },\n    {\n        \"name\": \"dialyzex\",\n        \"short_name\": \"Apache-2.0\",\n        \"note\": \"\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Risk"
  },
  {
    "type": "get",
    "url": "/user/:userid",
    "title": "User",
    "name": "User",
    "group": "Utility",
    "description": "<p>Utility endpoint to show information about users on GitHub.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 18,\n        \"login\": \"developertown\",\n        \"company\": null,\n        \"created_at\": \"2010-12-09T13:14:35.000Z\",\n        \"type\": \"ORG\",\n        \"fake\": 0,\n        \"deleted\": 0,\n        \"long\": -86.158068,\n        \"lat\": 39.768403,\n        \"country_code\": \"us\",\n        \"state\": \"Marion County\",\n        \"city\": \"Indianapolis\",\n        \"location\": \"Indianapolis, IN\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "/owner/:owner/repo/:repo",
    "title": "Get Repo",
    "name": "get_repo",
    "group": "Utility",
    "description": "<p>Get the <code>repo_group_id</code> &amp; <code>repo_id</code> of a particular repo.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21339,\n        \"repo_group_id\": 23\n    },\n    {\n        \"repo_id\": 21000,\n        \"repo_group_id\": 20\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "/rg-name/:rg_name/repo-name/:repo_name",
    "title": "Get Repo",
    "name": "get_repo",
    "group": "Utility",
    "description": "<p>Get the <code>repo_group_id</code> &amp; <code>repo_id</code> of a particular repo.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21000,\n        \"repo_group_id\": 20,\n        \"repo_git\":\"https://github.com/rails/rails.git\"\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "/rg-names/:rg_name",
    "title": "Get Repo",
    "name": "get_repo",
    "group": "Utility",
    "description": "<p>Get the <code>repo_id</code> of a particular repo group.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_group_id\": 20,\n        \"rg_name\": 'Rails'\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "/repo-groups",
    "title": "Repo Groups",
    "name": "repo_groups",
    "group": "Utility",
    "description": "<p>Get all the downloaded repo groups.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_group_id\": 20,\n        \"rg_name\": \"Rails\",\n        \"rg_description\": \"Rails Ecosystem.\",\n        \"rg_website\": \"\",\n        \"rg_recache\": 0,\n        \"rg_last_modified\": \"2019-06-03T15:55:20.000Z\",\n        \"rg_type\": \"GitHub Organization\",\n        \"tool_source\": \"load\",\n        \"tool_version\": \"one\",\n        \"data_source\": \"git\",\n        \"data_collection_date\": \"2019-06-05T13:36:25.000Z\"\n    },\n    {\n        \"repo_group_id\": 23,\n        \"rg_name\": \"Netflix\",\n        \"rg_description\": \"Netflix Ecosystem.\",\n        \"rg_website\": \"\",\n        \"rg_recache\": 0,\n        \"rg_last_modified\": \"2019-06-03T15:55:20.000Z\",\n        \"rg_type\": \"GitHub Organization\",\n        \"tool_source\": \"load\",\n        \"tool_version\": \"one\",\n        \"data_source\": \"git\",\n        \"data_collection_date\": \"2019-06-05T13:36:36.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "/repos",
    "title": "Repos",
    "name": "repos",
    "group": "Utility",
    "description": "<p>Get all the downloaded repos.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21996,\n        \"repo_name\": \"incubator-argus\",\n        \"description\": null,\n        \"url\": \"github.com\\/apache\\/incubator-argus.git\",\n        \"repo_status\": \"Update\",\n        \"commits_all_time\": null,\n        \"issues_all_time\": null,\n        \"rg_name\": \"Apache\",\n        \"base64_url\": \"Z2l0aHViLmNvbS9hcGFjaGUvaW5jdWJhdG9yLWFyZ3VzLmdpdA==\"\n    },\n    {\n        \"repo_id\": 21729,\n        \"repo_name\": \"tomee-site\",\n        \"description\": null,\n        \"url\": \"github.com\\/apache\\/tomee-site.git\",\n        \"repo_status\": \"Complete\",\n        \"commits_all_time\": 224216,\n        \"issues_all_time\": 2,\n        \"rg_name\": \"Apache\",\n        \"base64_url\": \"Z2l0aHViLmNvbS9hcGFjaGUvdG9tZWUtc2l0ZS5naXQ=\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos",
    "title": "Repos in Repo Group",
    "name": "repos_in_repo_groups",
    "group": "Utility",
    "description": "<p>Get all the repos in a repo group.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21326,\n        \"repo_name\": \"graphql-js\",\n        \"description\": null,\n        \"url\": \"https:\\/\\/github.com\\/graphql\\/graphql-js.git\",\n        \"repo_status\": \"Complete\",\n        \"commits_all_time\": 6874,\n        \"issues_all_time\": 81\n    },\n    {\n        \"repo_id\": 21331,\n        \"repo_name\": \"graphiql\",\n        \"description\": null,\n        \"url\": \"https:\\/\\/github.com\\/graphql\\/graphiql.git\",\n        \"repo_status\": \"Complete\",\n        \"commits_all_time\": 4772,\n        \"issues_all_time\": 144\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "/top-insights",
    "title": "Top Insights",
    "name": "top_insights",
    "group": "Utility",
    "description": "<p>Get all the downloaded repo groups.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_group_id\": 20,\n        \"rg_name\": \"Rails\",\n        \"rg_description\": \"Rails Ecosystem.\",\n        \"rg_website\": \"\",\n        \"rg_recache\": 0,\n        \"rg_last_modified\": \"2019-06-03T15:55:20.000Z\",\n        \"rg_type\": \"GitHub Organization\",\n        \"tool_source\": \"load\",\n        \"tool_version\": \"one\",\n        \"data_source\": \"git\",\n        \"data_collection_date\": \"2019-06-05T13:36:25.000Z\"\n    },\n    {\n        \"repo_group_id\": 23,\n        \"rg_name\": \"Netflix\",\n        \"rg_description\": \"Netflix Ecosystem.\",\n        \"rg_website\": \"\",\n        \"rg_recache\": 0,\n        \"rg_last_modified\": \"2019-06-03T15:55:20.000Z\",\n        \"rg_type\": \"GitHub Organization\",\n        \"tool_source\": \"load\",\n        \"tool_version\": \"one\",\n        \"data_source\": \"git\",\n        \"data_collection_date\": \"2019-06-05T13:36:36.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "/top-insights",
    "title": "Top Insights",
    "name": "top_insights",
    "group": "Utility",
    "description": "<p>Get all the downloaded repo groups.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_group_id\": 20,\n        \"rg_name\": \"Rails\",\n        \"rg_description\": \"Rails Ecosystem.\",\n        \"rg_website\": \"\",\n        \"rg_recache\": 0,\n        \"rg_last_modified\": \"2019-06-03T15:55:20.000Z\",\n        \"rg_type\": \"GitHub Organization\",\n        \"tool_source\": \"load\",\n        \"tool_version\": \"one\",\n        \"data_source\": \"git\",\n        \"data_collection_date\": \"2019-06-05T13:36:25.000Z\"\n    },\n    {\n        \"repo_group_id\": 23,\n        \"rg_name\": \"Netflix\",\n        \"rg_description\": \"Netflix Ecosystem.\",\n        \"rg_website\": \"\",\n        \"rg_recache\": 0,\n        \"rg_last_modified\": \"2019-06-03T15:55:20.000Z\",\n        \"rg_type\": \"GitHub Organization\",\n        \"tool_source\": \"load\",\n        \"tool_version\": \"one\",\n        \"data_source\": \"git\",\n        \"data_collection_date\": \"2019-06-05T13:36:36.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Utility"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/stars-count",
    "title": "Stars Count (Repo)",
    "name": "stars_count_repo",
    "group": "Value",
    "description": "<p>Stars count.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"graphiql\",\n        \"stars\": 8653\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Value"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/stars-count",
    "title": "Stars Count (Repo Group)",
    "name": "stars_count_repo_group",
    "group": "Value",
    "description": "<p>Stars count.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21364,\n        \"repo_name\": \"irs_process_scripts\",\n        \"stars\": 20\n    },\n    {\n        \"repo_id\": 21420,\n        \"repo_name\": \"ruby-coffee-script\",\n        \"stars\": 19\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Value"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/stars",
    "title": "Stars (Repo)",
    "name": "stars_repo",
    "group": "Value",
    "description": "<p>A time series of stars count.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"graphiql\",\n        \"date\": \"2019-07-03T23:27:42.000Z\",\n        \"stars\": 8652\n    },\n    {\n        \"repo_name\": \"graphiql\",\n        \"date\": \"2019-07-04T16:40:44.000Z\",\n        \"stars\": 8653\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Value"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/stars",
    "title": "Stars (Repo Group)",
    "name": "stars_repo_group",
    "group": "Value",
    "description": "<p>A time series of stars count.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21491,\n        \"repo_name\": \"commons-io\",\n        \"date\": \"2019-07-03T23:23:36.000Z\",\n        \"stars\": 600\n    },\n    {\n        \"repo_id\": 21491,\n        \"repo_name\": \"commons-io\",\n        \"date\": \"2019-07-04T16:36:27.000Z\",\n        \"stars\": 601\n    },\n    {\n        \"repo_id\": 21524,\n        \"repo_name\": \"maven\",\n        \"date\": \"2019-07-03T23:21:14.000Z\",\n        \"stars\": 1730\n    },\n    {\n        \"repo_id\": 21524,\n        \"repo_name\": \"maven\",\n        \"date\": \"2019-07-04T16:34:04.000Z\",\n        \"stars\": 1733\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Value"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/watchers-count",
    "title": "watchers Count (Repo)",
    "name": "watchers_count_repo",
    "group": "Value",
    "description": "<p>Watchers count.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"airflow\",\n        \"watchers\": 649\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Value"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/watchers-count",
    "title": "Watchers Count (Repo Group)",
    "name": "watchers_count_repo_group",
    "group": "Value",
    "description": "<p>Watchers count.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21039,\n        \"repo_name\": \"rails_xss\",\n        \"watchers\": 20\n    },\n    {\n        \"repo_id\": 21036,\n        \"repo_name\": \"jquery-ujs\",\n        \"watchers\": 60\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Value"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/repos/:repo_id/watchers",
    "title": "Watchers (Repo)",
    "name": "watchers_repo",
    "group": "Value",
    "description": "<p>A time series of watchers count.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_id",
            "description": "<p>Repository ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_name\": \"airflow\",\n        \"date\": \"2019-07-03T23:22:26.000Z\",\n        \"watchers\": 649\n    },\n    {\n        \"repo_name\": \"airflow\",\n        \"date\": \"2019-07-04T16:35:16.000Z\",\n        \"watchers\": 647\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Value"
  },
  {
    "type": "get",
    "url": "/repo-groups/:repo_group_id/watchers",
    "title": "Watchers (Repo Group)",
    "name": "watchers_repo_group",
    "group": "Value",
    "description": "<p>A time series of watchers count.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_group_id",
            "description": "<p>Repository Group ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"repo_id\": 21036,\n        \"repo_name\": \"jquery-ujs\",\n        \"date\": \"2019-07-03T23:26:42.000Z\",\n        \"watchers\": 60\n    },\n    {\n        \"repo_id\": 21036,\n        \"repo_name\": \"jquery-ujs\",\n        \"date\": \"2019-07-04T16:39:39.000Z\",\n        \"watchers\": 60\n    },\n    {\n        \"repo_id\": 21039,\n        \"repo_name\": \"rails_xss\",\n        \"date\": \"2019-07-03T23:26:22.000Z\",\n        \"watchers\": 19\n    },\n    {\n        \"repo_id\": 21039,\n        \"repo_name\": \"rails_xss\",\n        \"date\": \"2019-07-04T16:39:20.000Z\",\n        \"watchers\": 20\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/augur_db/routes.py",
    "groupTitle": "Value"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/issues/closed",
    "title": "Closed Issues",
    "name": "closed_issues",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/metrics/blob/master/activity-metrics/issues-closed.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group_by",
            "description": "<p>(default to week) allows for results to be grouped by day, week, month, or year</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2011-03-19T00:00:00.000Z\",\n        \"issues_closed\": 3\n    },\n    {\n        \"date\": \"2011-03-25T00:00:00.000Z\",\n        \"issues_closed\": 6\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/commits?group_by=:group_by",
    "title": "Code Commits",
    "name": "code_commits",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"com/chaoss/metrics/blob/master/activity-metrics/code-commits.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_by",
            "description": "<p>(Default to week) Allows for results to be grouped by day, week, month, or year</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2017-08-27T00:00:00.000Z\",\n        \"commits\": 44\n    },\n    {\n        \"date\": \"2017-08-20T00:00:00.000Z\",\n        \"commits\": 98\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/code_review_iteration",
    "title": "Code Review Iteration",
    "name": "code_review_iteration",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"com/chaoss/metrics/blob/master/activity-metrics/code-review-iteration.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2012-05-16T00:00:00.000Z\",\n        \"iterations\": 2\n    },\n    {\n        \"date\": \"2012-05-16T00:00:00.000Z\",\n        \"iterations\": 1\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/commits/comments",
    "title": "Commit Comments",
    "name": "commit_comments",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n        {\n            \"date\": \"2008-07-10T00:00:00.000Z\",\n            \"counter\": 2\n        },\n        {\n            \"date\": \"2008-07-25T00:00:00.000Z\",\n            \"counter\": 1\n        }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/commits100",
    "title": "Commits100",
    "name": "commits100",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2017-08-13T00:00:00.000Z\",\n        \"commits\": 114\n    },\n    {\n        \"date\": \"2017-08-06T00:00:00.000Z\",\n        \"commits\": 113\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/committer_locations",
    "title": "Committer Locations",
    "name": "committer_locations",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"login\": \"rafaelfranca\",\n        \"location\": \"São Paulo, Brazil\",\n        \"commits\": 7171\n    },\n    {\n        \"login\": \"tenderlove\",\n        \"location\": \"Seattle\",\n        \"commits\": 4605\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/community_age",
    "title": "Community Age",
    "name": "community_age",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"login\": \"bonnie\",\n        \"location\": \"Rowena, TX\",\n        \"commits\": 12\n    },\n    {\n        \"login\":\"clyde\",\n        \"location\":\"Ellis County, TX\",\n        \"commits\": 12\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/community_engagement",
    "title": "Community Engagement",
    "name": "community_engagement",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2011-04-16T00:00:00.000Z\",\n        \"issues_opened\": 0,\n        \"issues_closed\": 0,\n        \"pull_requests_opened\": 32,\n        \"pull_requests_merged\": 0,\n        \"pull_requests_closed\": 19,\n        \"issues_opened_total\": 4,\n        \"issues_closed_total\": 0,\n        \"issues_closed_rate_this_window\": null,\n        \"issues_closed_rate_total\": 0,\n        \"issues_delta\": 0,\n        \"issues_open\": 4,\n        \"pull_requests_opened_total\": 284,\n        \"pull_requests_closed_total\": 242,\n        \"pull_requests_closed_rate_this_window\": 0.59375,\n        \"pull_requests_closed_rate_total\": 0.8521126761,\n        \"pull_requests_delta\": 13,\n        \"pull_requests_open\": 42\n    },\n    {\n        \"date\": \"2011-04-17T00:00:00.000Z\",\n        \"issues_opened\": 0,\n        \"issues_closed\": 0,\n        \"pull_requests_opened\": 15,\n        \"pull_requests_merged\": 1,\n        \"pull_requests_closed\": 14,\n        \"issues_opened_total\": 4,\n        \"issues_closed_total\": 0,\n        \"issues_closed_rate_this_window\": null,\n        \"issues_closed_rate_total\": 0,\n        \"issues_delta\": 0,\n        \"issues_open\": 4,\n        \"pull_requests_opened_total\": 299,\n        \"pull_requests_closed_total\": 256,\n        \"pull_requests_closed_rate_this_window\": 0.9333333333,\n        \"pull_requests_closed_rate_total\": 0.856187291,\n        \"pull_requests_delta\": 1,\n        \"pull_requests_open\": 43\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/contributing_github_organizations",
    "title": "Contributing Github Organizations",
    "name": "contributing_github_organizations",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"com/chaoss/metrics/blob/master/activity-metrics/contributing-organizations.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"contributing_org\": 4066,\n        \"commits\": 36069,\n        \"issues\": 432,\n        \"commit_comments\": 1597,\n        \"issue_comments\": 15421,\n        \"pull_requests\": 808,\n        \"pull_request_comments\": 0,\n        \"total\": 54327,\n        \"count\": 35\n    },\n    {\n        \"contributing_org\": 16465,\n        \"commits\": 39111,\n        \"issues\": 332,\n        \"commit_comments\": 524,\n        \"issue_comments\": 3188,\n        \"pull_requests\": 57,\n        \"pull_request_comments\": 18,\n        \"total\": 43230,\n        \"count\": 11\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/contribution_acceptance",
    "title": "Contribution Acceptance",
    "name": "contribution_acceptance",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://www.github.com/chaoss/metrics/blob/master/activity-metrics/contribution-acceptance.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2012-05-16T00:00:00.000Z\",\n        \"ratio\": 1.1579\n    },\n    {\n        \"date\": \"2012-05-20T00:00:00.000Z\",\n        \"ratio\": 1.3929\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/contributions",
    "title": "Contributions",
    "name": "contributions",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ],
        "String": [
          {
            "group": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Limit results to the given user's contributions</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         \"date\": \"2004-11-24T00:00:00.000Z\",\n         \"commits\": 3,\n         \"pull_requests\": null,\n         \"issues\": null,\n         \"commit_comments\": null,\n         \"pull_request_comments\": null,\n         \"issue_comments\": null,\n         \"total\": null\n     },\n     {\n         \"date\": \"2004-11-30T00:00:00.000Z\",\n         \"commits\": 7,\n         \"pull_requests\": null,\n         \"issues\": null,\n         \"commit_comments\": null,\n         \"pull_request_comments\": null,\n         \"issue_comments\": null,\n         \"total\": null\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/contributors",
    "title": "Total Contributions by User",
    "name": "contributors",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         \"user\": 8153,\n         \"commits\": 6825,\n         \"issues\": 127,\n         \"commit_comments\": 313,\n         \"issue_comments\": 13152,\n         \"pull_requests\": 1,\n         \"pull_request_comments\": 0,\n         \"total\": 20418\n     },\n     {\n         \"user\": 45381,\n         \"commits\": 2192,\n         \"issues\": 202,\n         \"commit_comments\": 130,\n         \"issue_comments\": 4633,\n         \"pull_requests\": 0,\n         \"pull_request_comments\": 0,\n         \"total\": 7157\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/fakes",
    "title": "Fakes",
    "name": "fakes",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2010-04-09T00:00:00.000Z\",\n        \"fakes\": 1\n    },\n    {\n        \"date\": \"2010-04-27T00:00:00.000Z\",\n        \"fakes\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/issues/response_time",
    "title": "First Response To Issue Duration",
    "name": "first_response_to_issue_duration",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/metrics/blob/master/activity-metrics/first-response-to-issue-duration.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 2,\n        \"opened\": \"2012-01-19T05:24:55.000Z\",\n        \"first_commented\": \"2012-01-19T05:30:13.000Z\",\n        \"pull_request\": 0,\n        \"minutes_to_comment\": 5\n    },\n    {\n        \"id\": 3,\n        \"opened\": \"2012-01-26T15:07:56.000Z\",\n        \"first_commented\": \"2012-01-26T15:09:28.000Z\",\n        \"pull_request\": 0,\n        \"minutes_to_comment\": 1\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/forks?group_by=:group_by",
    "title": "Forks",
    "name": "forks",
    "group": "_GHTorrent__Legacy_",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_by",
            "description": "<p>(Default to week) Allows for results to be grouped by day, week, month, or year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "description": "<p><a href=\"https://github.com/chaoss/metrics/blob/master/activity-metrics/forks.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2017-08-20T00:00:00.000Z\",\n        \"projects\": 48\n    },\n    {\n        \"date\": \"2017-08-13T00:00:00.000Z\",\n        \"projects\": 53\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/issues/activity",
    "title": "Issue Activity",
    "name": "issue_activity",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"0000-00-00\",\n        \"count\": 2,\n        \"action\": \"closed\"\n    },\n    {\n        \"date\": \"0000-00-00\",\n        \"count\": 70,\n        \"action\": \"opened\"\n    },\n    {\n        \"date\": \"0000-00-00\",\n        \"count\": 0,\n        \"action\": \"reopened\"\n    },\n    {\n        \"date\": \"0000-00-00\",\n        \"count\": 68,\n        \"action\": \"open\"\n    },\n    {\n        \"date\": \"2009-04-01T00:00:00.000Z\",\n        \"count\": 0,\n        \"action\": \"closed\"\n    },\n    {\n        \"date\": \"2009-04-01T00:00:00.000Z\",\n        \"count\": 29,\n        \"action\": \"opened\"\n    },\n    {\n        \"date\": \"2009-04-01T00:00:00.000Z\",\n        \"count\": 0,\n        \"action\": \"reopened\"\n    },\n    {\n        \"date\": \"2009-04-01T00:00:00.000Z\",\n        \"count\": 29,\n        \"action\": \"open\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/issue_comments",
    "title": "Issue Comments",
    "name": "issue_comments",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/metrics/blob/master/activity-metrics/issue-comments.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2009-04-05T00:00:00.000Z\",\n        \"counter\": 3\n    },\n    {\n        \"date\": \"2009-04-16T00:00:00.000Z\",\n        \"counter\": 5\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pulls/maintainer_response_time",
    "title": "Maintainer Response to Merge Request Duration",
    "name": "maintainer_response_to_merge_request_duration",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/augurlabs/metrics/blob/master/activity-metrics/maintainer-response-to-merge-request-duration.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2011-05-10T00:00:00.000Z\",\n        \"days\": 32\n    },\n    {\n        \"date\": \"2011-05-21T00:00:00.000Z\",\n        \"days\": 3\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pulls/new_contributing_github_organizations",
    "title": "New Contributing Github Organizations",
    "name": "new_github_contributing_organizations",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/augurlabs/metrics/blob/master/activity-metrics/new-contributing-organizations.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2008-04-12T23:43:38.000Z\",\n        \"organizations\": 1\n    },\n    {\n        \"date\": \"2008-08-23T15:05:52.000Z\",\n        \"organizations\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/new_watchers",
    "title": "New Watchers",
    "name": "new_watchers",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2010-04-09T00:00:00.000Z\",\n        \"new_watchers\": 1\n    },\n    {\n        \"date\": \"2010-04-27T00:00:00.000Z\",\n        \"new_watchers\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/issues",
    "title": "Open Issues",
    "name": "open_issues",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/metrics/blob/master/activity-metrics/open-issues.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group_by",
            "description": "<p>(default to week) allows for results to be grouped by day, week, month, or year</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": "<p>username of the owner of the github repository</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": "<p>name of the github repository</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/project_age",
    "title": "Project Age",
    "name": "project_age",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n    \"date\": \"2008-04-11T00:00:00.000Z\",\n    \"{0}\": 1\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pulls/acceptance_rate",
    "title": "Pull Request Acceptance Rate",
    "deprecated": {
      "content": "This endpoint was removed. Please use (#Experimental:community-engagement)"
    },
    "name": "pull_request_acceptance_rate",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2010-09-11T00:00:00.000Z\",\n        \"rate\": 0.3333\n    },\n    {\n        \"date\": \"2010-09-13T00:00:00.000Z\",\n        \"rate\": 0.3333\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pulls/response_time",
    "title": "Most Recent Response To Pull Requests Duration",
    "name": "pull_request_comment_duration_",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>&lt;a href=&quot;https://github.com/chaoss/wg-gmd/blob/master/metrics/pull-requests-comment-duration.md&gt;CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"pull_request_id\": 1709,\n        \"opened\": \"2012-01-19T05:24:55.000Z\",\n        \"first_commented\": \"2012-01-19T05:30:13.000Z\",\n        \"minutes_to_first_pr_comment\": 5,\n        \"most_recent_comment\": \"2012-01-19T05:30:13.000Z\",\n        \"minutes_to_recent_pr_comment\": 5\n\n    },\n    {\n        \"pull_request_id\": 1721,\n        \"opened\": \"2012-01-19T05:24:55.000Z\",\n        \"first_commented\": \"2012-01-19T05:30:13.000Z\",\n        \"minutes_to_first_pr_comment\": 5,\n        \"most_recent_comment\": \"2012-01-19T05:30:13.000Z\",\n        \"minutes_to_recent_pr_comment\": 5\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pulls/comments?group_by=:group_by",
    "title": "Pull Request Comments",
    "name": "pull_request_comments",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/metrics/blob/master/activity-metrics/pull-request-comments.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2011-11-15T00:00:00.000Z\",\n        \"counter\": 3\n    },\n    {\n        \"date\": \"2011-11-25T00:00:00.000Z\",\n        \"counter\": 1\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pulls/closed",
    "title": "Pull Requests Closed",
    "name": "pull_requests_closed",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/metrics/blob/master/activity-metrics/pull-requests-closed.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2013-01-09T00:00:00.000Z\",\n        \"pull_requests\": 3\n    },\n    {\n        \"date\": \"2016-01-14T00:00:00.000Z\",\n        \"pull_requests\": 1\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pulls/made_closed",
    "title": "Pull Requests Made/Closed",
    "name": "pull_requests_made_closed",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/metrics/blob/master/activity-metrics/pull-requests-made-closed.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2010-09-11T00:00:00.000Z\",\n        \"rate\": 0.3333\n    },\n    {\n        \"date\": \"2010-09-13T00:00:00.000Z\",\n        \"rate\": 0.3333\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/pulls",
    "title": "Pull Requests Open",
    "name": "pull_requests_open",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/metrics/blob/master/activity-metrics/pull-requests-open.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2013-01-09T00:00:00.000Z\",\n        \"pull_requests\": 3\n    },\n    {\n        \"date\": \"2016-01-14T00:00:00.000Z\",\n        \"pull_requests\": 1\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/total_committers",
    "title": "Total Committers",
    "name": "total_committers",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2004-11-24T00:00:00.000Z\",\n        \"total_total_committers\": 1\n    },\n    {\n        \"date\": \"2005-02-18T00:00:00.000Z\",\n        \"total_total_committers\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/total_watchers",
    "title": "Total Watchers",
    "name": "total_watchers",
    "group": "_GHTorrent__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2005-08-26T00:00:00.000Z\",\n        \"total_total_watchers\": 5\n    },\n    {\n        \"date\": \"2005-09-02T00:00:00.000Z\",\n        \"total_total_watchers\": 6\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/watchers",
    "title": "Watchers",
    "name": "watchers",
    "group": "_GHTorrent__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/metrics/blob/master/activity-metrics/activity-metrics-list.md\">CHAOSS Metric Definition</a>. Source: <a href=\"http://ghtorrent.org/\">GHTorrent</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2017-08-23T00:00:00.000Z\",\n        \"watchers\": 86\n    },\n    {\n        \"date\": \"2017-08-16T00:00:00.000Z\",\n        \"watchers\": 113\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/ghtorrent/routes.py",
    "groupTitle": "_GHTorrent__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/bus_factor",
    "title": "Bus Factor",
    "name": "bus_factor",
    "group": "_GitHub_API__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"https://developer.github.com/\">GitHub API</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "threshold",
            "description": "<p>Percentage used to determine how many lost people would kill the project</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"best\": \"5\",\n        \"worst\": \"1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/downloads",
    "title": "Downloads",
    "name": "downloads",
    "group": "_GitHub_API__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"https://developer.github.com/\">GitHub API</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2018-06-14\",\n        \"downloads\": 129148\n    },\n    {\n        \"date\": \"2018-06-13\",\n        \"downloads\": 131262\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/downloads/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/githubapi/issues/closed",
    "title": "Closed Issues",
    "name": "githubapi_closed_issues",
    "group": "_GitHub_API__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/wg-gmd/blob/master/metrics/issues-closed.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"created_at\": \"2019-01-09T00:00:00.000Z\",\n        \"count\": 1\n    },\n    {\n        \"created_at\": \"2019-01-10T00:00:00.000Z\",\n        \"count\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/githubapi/commits",
    "title": "Code Commits",
    "name": "githubapi_code_commits",
    "group": "_GitHub_API__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/wg-gmd/blob/master/activity-metrics/code-commits.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"created_at\": \"2017-01-30T00:00:00.000Z\",\n        \"count\": 6\n    },\n    {\n        \"created_at\": \"2017-01-31T00:00:00.000Z\",\n        \"count\": 14\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/githubapi/contributors",
    "title": "List of Contributors & their Contributions",
    "name": "githubapi_contributors",
    "group": "_GitHub_API__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/wg-gmd/blob/master/metrics/contributors.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"login\": \"howderek\",\n        \"contributions\": 372\n    },\n    {\n        \"login\": \"ccarterlandis\",\n        \"contributions\": 190\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/githubapi/issues",
    "title": "Issues Opened",
    "name": "githubapi_issues_opened",
    "group": "_GitHub_API__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/wg-gmd/blob/master/metrics/issues-open.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"created_at\": \"2019-02-28T00:00:00.000Z\",\n        \"count\": 4\n    },\n    {\n        \"created_at\": \"2019-03-01T00:00:00.000Z\",\n        \"count\": 1\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/githubapi/pull_requests_closed",
    "title": "Pull Requests Closed",
    "name": "githubapi_pull_requests_Closed",
    "group": "_GitHub_API__Legacy_",
    "description": "<p><a href=\"https://github.com/ComputationalMystics/wg-gmd/blob/master/activity-metrics/pull-requests-closed.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{'count': 6}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/githubapi/pull_requests_merged",
    "title": "Pull Requests Merged",
    "name": "githubapi_pull_requests_merged",
    "group": "_GitHub_API__Legacy_",
    "description": "<p>Count of pull requests merged.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{'count': 84}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/githubapi/pull_requests_open",
    "title": "Pull Requests Open",
    "name": "githubapi_pull_requests_open",
    "group": "_GitHub_API__Legacy_",
    "description": "<p><a href=\"https://github.com/ComputationalMystics/wg-gmd/blob/master/activity-metrics/pull-requests-open.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{'count': 3}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/lines_changed",
    "title": "Lines of Code Changed",
    "name": "lines_of_code_changed",
    "group": "_GitHub_API__Legacy_",
    "description": "<p><a href=\"https://github.com/augurlabs/metrics/blob/master/activity-metrics/lines-of-code-changed.md\">CHAOSS Metric Definition</a>.  Source: <a href=\"https://developer.github.com/\">GitHub API</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        'date': '2015-11-01T00:00:00Z',\n        'lines_changed': 396137.0\n    },\n    {\n        'date': '2015-11-08T00:00:00Z',\n        'lines_changed': 3896.0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/tags/major",
    "title": "Major Tags",
    "name": "major_tags",
    "group": "_GitHub_API__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"https://developer.github.com/\">GitHub API</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2008-04-10T17:25:14-07:00\",\n        \"release\": \"v1.0.0\"\n    },\n    {\n        \"date\": \"2008-04-10T17:25:47-07:00\",\n        \"release\": \"v2.0.0\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/githubapi/repository_size",
    "title": "Repository Size",
    "name": "repository_size",
    "group": "_GitHub_API__Legacy_",
    "description": "<p><a href=\"https://github.com/chaoss/wg-gmd/blob/master/metrics/archived_metrics/repository-size.md\">CHAOSS Metric Definition</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"best\": \"5\",\n        \"worst\": \"1\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/timeseries/tags/major",
    "title": "Tages",
    "name": "tags",
    "group": "_GitHub_API__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"https://developer.github.com/\">GitHub API</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"date\": \"2008-04-10T17:25:06-07:00\",\n        \"release\": \"v0.9.1\"\n    },\n    {\n        \"date\": \"2008-04-10T17:25:07-07:00\",\n        \"release\": \"v0.9.2\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/githubapi/routes.py",
    "groupTitle": "_GitHub_API__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/dependencies",
    "title": "Dependencies",
    "name": "dependencies",
    "group": "_Libraries_io__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"https://libraries.io/\">LibrariesIO</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    \"full_name\": \"rails/rails\",\n    \"description\": \"Ruby on Rails\",\n    \"fork\": false,\n    \"created_at\": \"2008-04-11T02:19:47.000Z\",\n    \"updated_at\": \"2018-05-08T14:18:07.000Z\",\n    \"pushed_at\": \"2018-05-08T11:38:30.000Z\",\n    \"homepage\": \"http://rubyonrails.org\",\n    \"size\": 163747,\n    \"stargazers_count\": 39549,\n    \"language\": \"Ruby\",\n    \"has_issues\": true,\n    \"has_wiki\": false,\n    \"has_pages\": false,\n    \"forks_count\": 16008,\n    \"mirror_url\": null,\n    \"open_issues_count\": 1079,\n    \"default_branch\": \"master\",\n    \"subscribers_count\": 2618,\n    \"uuid\": \"8514\",\n    \"source_name\": null,\n    \"license\": \"MIT\",\n    \"private\": false,\n    \"contributions_count\": 2627,\n    \"has_readme\": \"README.md\",\n    \"has_changelog\": null,\n    \"has_contributing\": \"CONTRIBUTING.md\",\n    \"has_license\": \"MIT-LICENSE\",\n    \"has_coc\": \"CODE_OF_CONDUCT.md\",\n    \"has_threat_model\": null,\n    \"has_audit\": null,\n    \"status\": null,\n    \"last_synced_at\": \"2018-03-31T12:40:28.163Z\",\n    \"rank\": 28,\n    \"host_type\": \"GitHub\",\n    \"host_domain\": null,\n    \"name\": null,\n    \"scm\": \"git\",\n    \"fork_policy\": null,\n    \"github_id\": \"8514\",\n    \"pull_requests_enabled\": null,\n    \"logo_url\": null,\n    \"github_contributions_count\": 2627,\n    \"keywords\": [\n        \"activejob\",\n        \"activerecord\",\n        \"framework\",\n        \"html\",\n        \"mvc\",\n        \"rails\",\n        \"ruby\"\n    ],\n    \"dependencies\": [\n        {\n            \"project_name\": \"blade-sauce_labs_plugin\",\n            \"name\": \"blade-sauce_labs_plugin\",\n            \"platform\": \"rubygems\",\n            \"requirements\": \"0.7.2\",\n            \"latest_stable\": \"0.7.3\",\n            \"latest\": \"0.7.3\",\n            \"deprecated\": false,\n            \"outdated\": true,\n            \"filepath\": \"Gemfile.lock\",\n            \"kind\": \"runtime\"\n        },\n        {\n            \"project_name\": \"blade-qunit_adapter\",\n            \"name\": \"blade-qunit_adapter\",\n            \"platform\": \"rubygems\",\n            \"requirements\": \"2.0.1\",\n            \"latest_stable\": \"2.0.1\",\n            \"latest\": \"2.0.1\",\n            \"deprecated\": false,\n            \"outdated\": false,\n            \"filepath\": \"Gemfile.lock\",\n            \"kind\": \"runtime\"\n        }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/librariesio/routes.py",
    "groupTitle": "_Libraries_io__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/dependency_stats",
    "title": "Dependency Stats",
    "name": "dependency_stats",
    "group": "_Libraries_io__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"https://libraries.io/\">LibrariesIO</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"dependencies\": \"10\",\n        \"dependent_projects\": \"10.6K\",\n        \"dependent_repositories\": \"392K\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/librariesio/routes.py",
    "groupTitle": "_Libraries_io__Legacy_"
  },
  {
    "type": "get",
    "url": "/:owner/:repo/dependents",
    "title": "Dependents",
    "name": "dependents",
    "group": "_Libraries_io__Legacy_",
    "description": "<p>This is an Augur-specific metric. We are currently working to define these more formally. Source: <a href=\"https://libraries.io/\">LibrariesIO</a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>Username of the owner of the GitHub repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repo",
            "description": "<p>Name of the GitHub repository</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"name\": \"rspec-rails\",\n        \"platform\": \"Rubygems\",\n        \"description\": \"rspec-rails is a testing framework for Rails 3+.\",\n        \"homepage\": \"https://github.com/rspec/rspec-rails\",\n        \"repository_url\": \"https://github.com/rspec/rspec-rails\",\n        \"normalized_licenses\": [\n            \"MIT\"\n        ],\n        \"rank\": 26,\n        \"latest_release_published_at\": \"2017-11-20T09:27:22.144Z\",\n        \"latest_release_number\": \"3.7.2\",\n        \"language\": \"Ruby\",\n        \"status\": null,\n        \"package_manager_url\": \"https://rubygems.org/gems/rspec-rails\",\n        \"stars\": 3666,\n        \"forks\": 732,\n        \"keywords\": [],\n        \"latest_stable_release\": {\n            \"id\": 11315605,\n            \"project_id\": 245284,\n            \"number\": \"3.7.2\",\n            \"published_at\": \"2017-11-20T09:27:22.144Z\",\n            \"created_at\": \"2017-11-20T09:31:11.532Z\",\n            \"updated_at\": \"2017-11-20T09:31:11.532Z\",\n            \"runtime_dependencies_count\": 7\n        },\n        \"latest_download_url\": \"https://rubygems.org/downloads/rspec-rails-3.7.2.gem\",\n        \"dependents_count\": 4116,\n        \"dependent_repos_count\": 129847,\n        \"versions\": [\n            {\n                \"number\": \"2.12.2\",\n                \"published_at\": \"2013-01-12T18:56:40.027Z\"\n            },\n            {\n                \"number\": \"2.12.1\",\n                \"published_at\": \"2013-01-07T23:04:53.104Z\"\n            },\n            {\n                \"number\": \"2.12.0\",\n                \"published_at\": \"2012-11-13T03:37:01.354Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../augur/datasources/librariesio/routes.py",
    "groupTitle": "_Libraries_io__Legacy_"
  }
] });
