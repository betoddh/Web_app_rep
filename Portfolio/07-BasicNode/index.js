import {randomSupervillain} from 'supervillains';
import {randomSuperhero} from 'superheroes';
import sw from 'star-wars-quotes';
var superName = randomSuperhero();
var villainName = randomSupervillain();


console.log(sw())


const superhero = superName;
const supervillain = villainName;

// The story content
const story = `
The skies crackled with electricity as two figures faced off atop a ruined skyscraper, 
the final standing structure in a city reduced to ash and rubble. To the east, a blood-red sun bled through thick clouds of dust and smoke, 
casting an eerie glow over the scene. Standing tall, draped in midnight-blue armor that pulsed with an ethereal energy, was ${superhero}, a superhero wielding the power of the cosmos, able to manipulate gravity and bend light. 
Opposing him, cloaked in shadows that writhed and flickered like living flames, was ${supervillain}, a supervillain born of darkness itself, who could tear reality asunder with a flick of his hand.

For a moment, a calm hush fell over the world, as though the planet itself held its breath. Then ${supervillain} raised one hand and twisted his fingers, pulling threads of darkness from the air and weaving them into a lance of pure void. 
${superhero}’s eyes narrowed, his fists clenching as the very stars seemed to condense in his palms, glowing with a deadly brilliance.

Without warning, ${supervillain} hurled the lance toward ${superhero}. ${superhero} thrust his hands out, catching the weapon midair with a magnetic field that fractured and crackled around him. 
The energy splintered, scattering shadows across the ground, but ${superhero} pushed back with a massive blast of light that lit up the sky, sending ${supervillain} crashing through three layers of solid concrete.

${supervillain} snarled, eyes blazing with malice. He rose, dusting himself off, and suddenly the shadows around him converged, forming twin swords that hissed with deadly intent. 
He charged, the shadows merging and separating as he struck. ${superhero} ducked and weaved, calling upon his gravity manipulation to make himself lighter, faster, a blur of blue light dodging ${supervillain}’s strikes.

Then, with a roar, ${superhero} raised his hands, pulling down a meteor from the heavens. It tore through the sky like a blazing comet, aimed straight at ${supervillain}. 
The villain raised his arms and caught the meteor with a gravitational force of his own, twisting it into a thousand molten fragments that exploded outward, raining down on the broken city. 
As the ground quaked and the ruins shattered underfoot, ${superhero} blasted forward, launching a kick to ${supervillain}’s chest that sent him sprawling across the shattered earth.

${supervillain} laughed—a dark, chilling sound—and with a vicious grin, plunged his hand into the fabric of reality itself. 
The air split apart, opening a portal to a void realm, a place beyond time, a blackness that could consume anything in its path. 
${superhero} struggled as the pull of the void tore at him, dragging him toward the endless nothingness.

Summoning every last ounce of his power, ${superhero} pushed back, creating a shockwave of light that struck ${supervillain} like a battering ram. 
${supervillain} stumbled, the portal flickering before snapping shut. But he was relentless, rising to his feet with a hiss of fury, his body enveloped in shadow tendrils.

${superhero} knew this was the endgame. Gathering the stars in his hands, he unleashed his full power—a supernova of pure energy that ignited the atmosphere, casting a radiant light across the desolate landscape. 
${supervillain} shrieked as the light tore through his form, shadows peeling away layer by layer until only a faint, dark residue remained.

But as ${superhero}’s light faded, his energy spent, ${supervillain}’s essence slowly began to reassemble. His voice, a whisper in the wind, promised, “I am the darkness, the end of all things. I will always return.”

And as the last embers of light dimmed, ${superhero} stood, resolute, in the silence of a world reborn from fire and shadow. The battle was over, but the war had just begun.
`;

// Display the story in the console
console.log(story);

import fs from 'fs';

fs.readFile("input.txt", (err, data) => {

    if (!err) {

        console.log('data: ' + data);

    } else {

        console.log(err);

    }

});