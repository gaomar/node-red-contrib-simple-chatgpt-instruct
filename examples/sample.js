[
    {
        "id": "63c40174fc3114fb",
        "type": "inject",
        "z": "e0e3e454efb53b1d",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "織田信長を50文字程度で絵文字を使ってギャル言葉で要約してください。",
        "payloadType": "str",
        "x": 110,
        "y": 540,
        "wires": [
            [
                "479ae487f411b42a"
            ]
        ]
    },
    {
        "id": "479ae487f411b42a",
        "type": "simple-gpt-instruct",
        "z": "e0e3e454efb53b1d",
        "name": "",
        "Token": "",
        "Model": "",
        "lengthType": "num",
        "maxLength": "",
        "x": 290,
        "y": 540,
        "wires": [
            [
                "9dee986b93b826f6"
            ]
        ]
    },
    {
        "id": "9dee986b93b826f6",
        "type": "debug",
        "z": "e0e3e454efb53b1d",
        "name": "debug",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 480,
        "y": 540,
        "wires": []
    }
]