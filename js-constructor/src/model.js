import image from './assets/1.png';

export const model = [
    {type: 'title', value: 'KonstryktoR na clean JS', options: {
        tag: "h2",
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240);',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem',
            'font-style': 'italic',
            'text-transform': 'uppercase'
        }
    }},
    {type: 'image', value: image, options: {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: "it is a picture"
    }},
    {type: 'text', value: 'here we go with some text', options: {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }},
    {type: 'columns', value: ['Приложение на чистом JS, без использования библиотек', 'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс', 'JS - это просто и интересно'],
        options: {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    }
]