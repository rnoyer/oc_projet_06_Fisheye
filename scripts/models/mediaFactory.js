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
        this._mediaId = data.id
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
    get mediaId(){
        return this._mediaId
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
