const sharp = require('sharp');
const compress_images = require("compress-images")

let path = process.argv[2];
let width = Number(process.argv[3]);

function resize(inputPath, outputPath, width) {
    sharp(inputPath)
        .resize({ width: width })
        .toFile(outputPath,
            (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Imagem redimensionada com sucesso!')
                    compress(outputPath, './compressed/') //erros =D
                }

            })
}
function compress(pathInput, outputPath) //erros =D
compress_images(
    pathInput,
    outputPath,
    { compress_force: false, statistic: false, autoupdate: false },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    function (err, completed) {
      if (completed === true) {
        console.log("Deu certo Graças a Deus!!")
      } else { console.log(err)}
    }
  );
resize(path, "./temp/output_resize.jpg", width)




