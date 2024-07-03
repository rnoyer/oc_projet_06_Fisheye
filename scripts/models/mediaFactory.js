class MediaFactory {
    constructor(data) {
        // Si le type correspond à objet Image, alors retourne-moi le formatage Image
        if (data.hasOwnProperty('image')) {
            return new Image(data)
        // Sinon retourne-moi le formatage Video
        } else if (data.hasOwnProperty('video')) {
            return new Video(data)
        // Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
        } else {
            throw 'No media found.'
        }
    }
 }

class Media{
    constructor(data){
        this._title = data.title
        this._likes = data.likes
        this._thumbnail = 'thumbnail'
    }
    get title() {
        return this._title
    }
    get likes() {
        return this._likes
    }
    get class(){
        return this._thumbnail
    }
}
 class Image extends Media{
    constructor(data){
        super(data)
        this._media = data.image
        this._element = 'img'
    }
    get media() {
        return this._media
    }
    get element(){
        return this._element
    }
}

class Video extends Media{
    constructor(data){
        super(data)
        this._media = data.video
        this._element = 'video'
    }
    get media() {
        return this._media
    }
    get element(){
        return this._element
    }
}

// class Image{
//     constructor(data){
//         this._title = data.title
//         this._media = data.image
//         this._likes = data.likes
//         this._element = 'img'
//         this._thumbnail = 'thumbnail'
//     }
//     get title() {
//         return this._title
//     }
//     get media() {
//         return this._media
//     }
//     get likes() {
//         return this._likes
//     }
//     get element(){
//         return this._element
//     }
//     get class(){
//         return this._thumbnail
//     }
// }

// class Video{
//     constructor(data){
//         this._title = data.title
//         this._media = data.video
//         this._likes = data.likes
//         this._element = 'video'
//         this._thumbnail = 'thumbnail'
//     }

//     get title() {
//         return this._title
//     }
//     get media() {
//         return this._media
//     }
//     get likes() {
//         return this._likes
//     }
//     get element(){
//         return this._element
//     }
//     get class(){
//         return this._thumbnail
//     }
// }