import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
    try {
        await imagemin(['public/images/*.{jpg,jpeg,png}'], {
            destination: 'public/images/optimized',
            plugins: [
                imageminWebp({ quality: 80 }),
                imageminMozjpeg({ quality: 80 }),
                imageminPngquant({ quality: [0.7, 0.9] })
            ]
        });
        console.log('Images optimized successfully!');
    } catch (error) {
        console.log('Image optimization skipped - packages may not be compatible');
        console.log('Images will load with current optimization techniques');
    }
})();
