
class Media {
    play() {
        throw new Error("O método play() deve ser implementado.");
    }
    
    stop() {
        throw new Error("O método stop() deve ser implementado.");
    }
}

class AudioMedia extends Media {
    play() {
        console.log("Tocando áudio...");
    }
    
    stop() {
        console.log(" Áudio pausado.");
    }
}

class VideoMedia extends Media {
    play() {
        console.log("Reproduzindo vídeo...");
    }
    
    stop() {
        console.log("Vídeo pausado.");
    }
}

class PodcastMedia extends Media {
    play() {
        console.log("Iniciando podcast...");
    }
    
    stop() {
        console.log(" Podcast pausado.");
    }
}

class MediaFactory {
    static createMedia(type) {
        switch (type.toLowerCase()) {
            case "audio":
                return new AudioMedia();
            case "video":
                return new VideoMedia();
            case "podcast":
                return new PodcastMedia();
            default:
                throw new Error("Tipo de mídia inválido! Use 'audio', 'video' ou 'podcast'.");
        }
    }
}

try {
    const media1 = MediaFactory.createMedia("audio");
    media1.play();
    media1.stop();

    const media2 = MediaFactory.createMedia("video");
    media2.play();
    media2.stop();

    const media3 = MediaFactory.createMedia("podcast");
    media3.play();
    media3.stop();

    const media4 = MediaFactory.createMedia("livro");
    media4.play();
} catch (error) {
    console.error(error.message);
}
