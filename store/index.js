import Vuex from 'vuex';


const createStore = () => {
    return new Vuex.Store({
    state: {
        students: [
            {id: 1, name:'Student', surname:'One', email:'student.one@uni.com'},
            {id: 2, name:'Student', surname:'Two', email:'student.two@uni.com'},
            {id: 3, name:'Student', surname:'Three', email:'student.three@uni.com'},
            {id: 4, name:'Student', surname:'Four', email:'student.four@uni.com'},
            {id: 5, name:'Student', surname:'Five', email:'student.five@uni.com'},
        ],
        questions: [
            {question: 'What does Heidegger believe about the words “to be”?', 
                answer: 
                    [
                        'To be is to exist physically', 
                        'To be is all about entities and their properties', 
                        'To be has been focused on too much in philosophy',
                        'It has been misunderstood by western philosophy since the time of Plato'
                    ]
            },

            {question: 'Which of the following statements is true?', 
                answer: 
                    [
                        'Heidegger agrees with Kant and Kierkegaard that a person is a subject', 
                        'Heidegger agrees with Kierkegaard that a person can be an object', 
                        'Heidegger says that Kant and Hegel miss the ontological character of Dasein’s Being',
                        'Heidegger says that Kierkegaard’s idea of Self as a task is incorrect'
                    ]
            },

            {question: 'Which of the following statements about Heidegger’s thought is untrue?', 
                answer: 
                    [
                        'Like Camus, he believed that accepting one’s condition of absurdity, however limiting it may be, is itself liberating.', 
                        'Like Sartre, his version of existentialism overcomes Cartesian dualism.', 
                        'He states that anxiety individualizes Dasein.',
                        'He states that, from anxiety, Dasein must choose between authenticity and inauthenticity.'
                    ]
            },

            {question: 'Heidegger turns to the term Dasein in his attempt to discern the meaning of Being in response to Plato’s search for truth. What does Heidegger conclude about Dasein and Being?', 
                answer: 
                    [
                        'Dasein understands essence as being the sole function of Being', 
                        'Dasein has a pre-ontological understanding of Being as part of its essence.', 
                        'Dasein and Being can only be understood through Plato’s methods of searching for truth',
                        'Dasein and Being have no relation to one another'
                    ]
            },

            {question: 'What does Heidegger refer to as the event of appropriation and what would be the result?', 
                answer: 
                    [
                        'Understanding our natural place in the world which results in peace of mind and with the world.', 
                        'Understanding time and presencing which results in understanding our place in the world.', 
                        'Coming to accept ourselves and others as a Being which results in socially beneficial actions.',
                        'The event where one comes to self-actualizing which results in them becoming masters of the world.'
                    ]
            },
        
            {question: 'Heidegger suggests that the analysis to understand the meaning of the Being should proceed in two stages. What are the two stages?', 
                answer: 
                    [
                        '1) Watch and observe the “average everydayness” of the Dasein. 2) Ask what it would be for the Dasein to exist and understand itself authentically.', 
                        '1) Watch and observe the “average everydayness” of the Dasein 2) Determine why the Dasein lives in such a way', 
                        '1) Observe the development of the Dasein by itself, as its own entity 2) Determine why the Dasein develops in that manner.',
                        '1) Analyze the how the Dasein comes to acknowledge its Being 2) Ask what it would be for the Dasein to exist and understand itself authentically'
                    ]
            },

            {question: 'What were the existentialists seeking?', 
                answer: 
                    [
                        'To understand God.', 
                        'To understand themselves.', 
                        'To understand the meaning of being.',
                        'To understand if there was other life in the universe.'
                    ]
            },

            {question: 'How does Heidegger explain CARE -  the phenomenon that lies at the root of Dasein\'s Being?', 
                answer: 
                    [
                        'Being out of the world.', 
                        'Engaging with entities encountering things that are not of this world.', 
                        'Being behind all possibilities.',
                        'The ontological structure that makes everyday concerns for projects possible.'
                    ]
            },
            {question: 'Heidegger turns to the term Dasein in his attempt to discern the meaning of Being in response to Plato’s search for truth. What does Heidegger conclude about Dasein and Being?', 
                answer: 
                    [   
                        'Dasein understands essence as being the sole function of Being', 
                        'Dasein has a pre-ontological understanding of Being as part of its essence', 
                        'Dasein and Being can only be understood through Plato’s methods of searching for truth',
                        'Dasein and Being have no relation to one another'
                    ]
            },
            {question: 'Which of the following statements is true?', 
                answer: 
                    [   
                        'Heidegger agrees with Kant and Kierkegaard that a person is a subject',
                        'Heidegger agrees with Kierkegaard that a person can be an object', 
                        'Heidegger says that Kant and Hegel miss the ontological character of Dasein’s Being',
                        'Heidegger says that Kierkegaard’s idea of Self as a task is incorrect'
                    ]
            },
        ],
        results: [0,,,,],
        arr: [],
    }
    
})
};
export default createStore;