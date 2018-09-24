import axios from 'axios';

export default class Search{

    constructor(qurey){
        this.qurey = qurey;
    }
    async getSearchResult() {

        const key = 'a2aac742266aaed165011608acc3aca2';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.qurey}`);
             this.result = res.data.recipes;
           // console.log(this.result);
        } catch (error){
            alert(error);
        }
       
        
    }

}







