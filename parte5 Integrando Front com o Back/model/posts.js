module.exports = {

     posts : [
        {id : "123",
        title: "Teste de Mural",
        description: "Descrição teste"},
    ],

    getAll(){
        return this.posts
    },

    newPost(title,description){
        this.posts.push({id:gerenateID(), title, description});
    }


}
function gerenateID(){
    return Math.random().toString(36).substr(2, 9); //
}