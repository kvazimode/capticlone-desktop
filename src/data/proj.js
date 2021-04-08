export default {
    name: `newproj`,
    slides: [
        {
            id: 0,
            name: `slide 001`,
            order: 0,
            bgImg: `bgName1.png`,
            elements: [
                {
                    type: `SimpleText`,
                    start: 2000,
                    duration: 6000,
                    font: `36px Arial`,
                    txtFill: `black`,
                    text: `fin`,
                    position: {
                        x: 700,
                        y: 600
                    },
                    order: 1,
                    hidden: false
                },
                {
                    type: `Highlight`,
                    start: 4000,
                    duration: 3000,
                    lineWidth: 4,
                    position: {
                        x: 200,
                        y: 300
                    },
                    w: 150,
                    h: 50,
                    order: 2,
                    fade: {
                        type: `inout`,
                        duration: 500,
                        max_alpha: 0.8
                    },
                    hidden: false
                }
            ]
        },
        {
            id: 1,
            name: `Slide 002`,
            order: 2,
            bgImg: `bgName2.png`,
            elements: [
                {
                    type: `TextBox`,
                    start: 5500,
                    duration: 5000,
                    font: `30px Arial`,
                    bgFill: `orange`,
                    txtFill: `white`,
                    text: `Some Text`,
                    position: {
                        x: 200,
                        y: 600
                    },
                    order: 2,
                    hidden: false
                  },
                  {
                    type: `SimpleText`,
                    start: 0,
                    duration: 5000,
                    font: `36px Arial`,
                    txtFill: `black`,
                    text: `Demo Reel`,
                    position: {
                        x: 320,
                        y: 200
                    },
                    order: 1,
                    hidden: false
                  }
            ]
        }
    ]
}
