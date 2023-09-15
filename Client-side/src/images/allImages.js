export default function importAllImages(requirements) {
    let images = {};
    requirements.keys().forEach((image, index) => { images[image.replace('./', '')] = requirements(image); });
    return images;
}