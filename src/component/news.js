import React, { Component } from 'react'
let listOFSection = []

export default class news extends Component {
    constructor() {
        super();

    }



    componentDidMount() {
        listOFSection = [
            {
                heading: "Heading1",
                link: 'https://www.google.com/',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error' +
                    'maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis' +
                    'quaerat accusamus numquam.'
            },
            {
                heading: "Heading2",
                link: 'https://www.google.com/',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error' +
                    'maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis' +
                    'quaerat accusamus numquam.'
            },
            {
                heading: "Heading3",
                link: 'https://www.google.com/',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error' +
                    'maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis' +
                    'quaerat accusamus numquam.'
            },
            {
                heading: "Heading4",
                link: 'https://www.google.com/',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error' +
                    'maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis' +
                    'quaerat accusamus numquam.'
            },
            {
                heading: "Heading5",
                link: 'https://www.google.com/',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error' +
                    'maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis' +
                    'quaerat accusamus numquam.'
            },
        ]
    }
    render() {
        return (

            <div id='' className='scrollspy-news'>
                {listOFSection.length > 0 ?
                    <> {listOFSection.map((section, indx) => {
                        return (
                            <section key={indx}>
                                <label>{section.heading}</label>
                                {section.link.length > 0 ? <p>
                                    <a href={section.link} target="_blank">
                                        {section.desc}
                                    </a>
                                </p> : <p>
                                    {section.desc}
                                </p>}
                            </section>
                        )


                    })}</>
                    : <h3>Comming Soon</h3>}

            </div>

        )
    }
}
