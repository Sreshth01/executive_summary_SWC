

document.body.style.overflow = "hidden";

function load()
{
    anime({
        targets: '.year',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.climatebox',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.climatetxt',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.dstt',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.execline',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.exectxt',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.greenbox',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.greybox',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.iitglogo',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });
    
    anime({
        targets: '.iitmandilogo',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.iisc',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.grouping',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.map1',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.map2',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.swiss',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.venn',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.yellowboxline',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

    anime({
        targets: '.yellowbox',
        opacity: ['0%','100%'],
        delay: 200,
        duration: 600,
        easing: 'easeInQuad'
    });

}


setTimeout(()=>{
    load();
},6000);

setTimeout(()=>{
    document.body.style.overflow = "";
},7000);
