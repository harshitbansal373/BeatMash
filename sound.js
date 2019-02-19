// javascript code here

var sound = new Audio();
// sound.src = "beep-07.mp3";

function beep(){
    sound.play();
}

var bg =document.getElementById('show');
var result = document.getElementById('result');

var repeat =  document.onkeydown = function first(event){
    // result.innerHTML = event.keyCode;
    if(event.keyCode==65){
        sound.src = "sound/Glass_Bottle_Break.mp3";
        beep();
        bg.style.backgroundColor = "#993333";
    }
    if(event.keyCode==83){
        sound.src = "sound/Glass_Shards_Smash.mp3";
        beep();
        bg.style.backgroundColor = "#990033";
    }
    if(event.keyCode==68){
        sound.src = "sound/metal-impact-5.mp3";
        beep();
        bg.style.backgroundColor = "#ccffcc";
    }
    if(event.keyCode==70){
        sound.src = "sound/metal-impact-6.mp3";
        beep();
        bg.style.backgroundColor = "#ccff33";
    }
    if(event.keyCode==71){
        sound.src = "sound/metal-impact-7.mp3";
        beep();
        bg.style.backgroundColor = "#009900";
    }
    if(event.keyCode==72){
        sound.src = "sound/metal-impact-8.mp3";
        beep();
        bg.style.backgroundColor = "#00cc99";
    }
    if(event.keyCode==74){
        sound.src = "sound/metal-impact-9.mp3";
        beep();
        bg.style.backgroundColor = "#009933";
    }
    if(event.keyCode==75){
        sound.src = "sound/skyes_audio_Glass_Bottle_Break_Smash_Long_Messy_Bright_028.mp3";
        beep();
        bg.style.backgroundColor = "#9999ff";
    }
    if(event.keyCode==76){
        sound.src = "sound/skyes_audio_Glass_Bottle_Break_Smash_Long_Shrill_Ringing_029.mp3";
        beep();
        bg.style.backgroundColor = "#cc00cc";
    }
    if(event.keyCode==90){
        sound.src = "sound/skyes_audio_Glass_Shards_Smash_Hard_Impact_Few_Shards_Glass_Grinding_032.mp3";
        beep();
        bg.style.backgroundColor = "#00ccff";
    }
    if(event.keyCode==88){
        sound.src = "sound/zapsplat_impacts_thud_generic_001_26887.mp3";
        beep();
        bg.style.backgroundColor = "#000099";
    }
    if(event.keyCode==67){
        sound.src = "sound/zapsplat_impacts_thud_generic_002_26888.mp3";
        beep();
        bg.style.backgroundColor = "#99ffcc";
    }
    if(event.keyCode==86){
        sound.src = "sound/zapsplat_impacts_thud_generic_003_26889.mp3";
        beep();
        bg.style.backgroundColor = "#ffcc99";
    }
    if(event.keyCode==66){
        sound.src = "sound/zapsplat_impacts_thud_generic_004_26890.mp3";
        beep();
        bg.style.backgroundColor = "#3399ff";
    }
    if(event.keyCode==78){
        sound.src = "sound/zapsplat_impacts_thud_generic_005_26891.mp3";
        beep();
        bg.style.backgroundColor = "#993366";
    }
    if(event.keyCode==77){
        sound.src = "sound/zapsplat_impacts_thud_generic_006_26892.mp3";
        beep();
        bg.style.backgroundColor = "#999966";
    }
    if(event.keyCode==81){
        sound.src = "sound/zapsplat_impacts_thud_generic_007_26893.mp3";
        beep();
        bg.style.backgroundColor = "#ffff66";
    }
    if(event.keyCode==87){
        sound.src = "sound/zapsplat_impact_slam_hard_metallic_smash_against_003_25976.mp3";
        beep();
        bg.style.backgroundColor = "#FFDAB9";
    }
    if(event.keyCode==69){
        sound.src = "sound/zapsplat_impact_slam_hard_metallic_smash_against_004_25977.mp3";
        beep();
        bg.style.backgroundColor = "#8FBC8F";
    }
    if(event.keyCode==82){
        sound.src = "sound/zapsplat_impacts_hit_metallic_loud_clunk_reverb_002_25753.mp3";
        beep();
        bg.style.backgroundColor = "#556B2F";
    }
    if(event.keyCode==84){
        sound.src = "sound/zapsplat_foley_metal_pole_hollow_small_hit_strike_metal_fence_chicken_wire_002_26539.mp3";
        beep();
        bg.style.backgroundColor = "#00FFFF";
    }
    if(event.keyCode==89){
        sound.src = "sound/zapsplat_foley_metal_pole_hollow_small_hit_strike_metal_fence_chicken_wire_003_26540.mp3";
        beep();
        bg.style.backgroundColor = "#66CDAA";
    }
    if(event.keyCode==85){
        sound.src = "sound/zapsplat_foley_metal_pole_hollow_small_hit_strike_metal_fence_chicken_wire_004_26541.mp3";
        beep();
        bg.style.backgroundColor = "#AFEEEE";
    }
    if(event.keyCode==73){
        sound.src = "sound/zapsplat_foley_metal_pole_hollow_small_hit_strike_metal_fence_chicken_wire_001_26538.mp3";
        beep();
        bg.style.backgroundColor = "#20B2AA";
    }
    if(event.keyCode==79){
        sound.src = "sound/zapsplat_impact_slam_hard_metallic_smash_against_001_25974.mp3";
        beep();
        bg.style.backgroundColor = "#6495ED";
    }
    if(event.keyCode==80){
        sound.src = "sound/zapsplat_impact_slam_hard_metallic_smash_against_002_25975.mp3";
        beep();
        bg.style.backgroundColor = "#DB7093";
    }
    

    if(event.keyCode==32){
        result.innerHTML = 'Track <i class="fas fa-hand-peace faa-shake animated"></i> ';            
        document.onkeydown = function second(event){
            if(event.keyCode==65){
                sound.src = "sound2/bang_1.wav";
                beep();
                bg.style.backgroundColor = "#993333";
            }
            if(event.keyCode==83){
                sound.src = "sound2/bang_2.wav";
                beep();
                bg.style.backgroundColor = "#990033";
            }
            if(event.keyCode==68){
                sound.src = "sound2/bang_3.wav";
                beep();
                bg.style.backgroundColor = "#ccffcc";
            }
            if(event.keyCode==70){
                sound.src = "sound2/bang_4.wav";
                beep();
                bg.style.backgroundColor = "#ccff33";
            }
            if(event.keyCode==71){
                sound.src = "sound2/bang_5.wav";
                beep();
                bg.style.backgroundColor = "#009900";
            }
            if(event.keyCode==72){
                sound.src = "sound2/camera_click.wav";
                beep();
                bg.style.backgroundColor = "#00cc99";
            }
            if(event.keyCode==74){
                sound.src = "sound2/cling_1.wav";
                beep();
                bg.style.backgroundColor = "#009933";
            }
            if(event.keyCode==75){
                sound.src = "sound2/clong_2.wav";
                beep();
                bg.style.backgroundColor = "#9999ff";
            }
            if(event.keyCode==76){
                sound.src = "sound2/coins_3.wav";
                beep();
                bg.style.backgroundColor = "#cc00cc";
            }
            if(event.keyCode==90){
                sound.src = "sound2/gunshot.wav";
                beep();
                bg.style.backgroundColor = "#00ccff";
            }
            if(event.keyCode==88){
                sound.src = "sound2/metal_button.wav";
                beep();
                bg.style.backgroundColor = "#000099";
            }
            if(event.keyCode==67){
                sound.src = "sound2/paper_tearing_2.wav";
                beep();
                bg.style.backgroundColor = "#99ffcc";
            }
            if(event.keyCode==86){
                sound.src = "sound2/shuffle-cards-2.wav";
                beep();
                bg.style.backgroundColor = "#ffcc99";
            }
            if(event.keyCode==66){
                sound.src = "sound2/sound22.mp3";
                beep();
                bg.style.backgroundColor = "#3399ff";
            }
            if(event.keyCode==78){
                sound.src = "sound2/sound38.mp3";
                beep();
                bg.style.backgroundColor = "#993366";
            }
            if(event.keyCode==77){
                sound.src = "sound2/spring_3.wav";
                beep();
                bg.style.backgroundColor = "#999966";
            }
            if(event.keyCode==81){
                sound.src = "sound2/squeeze-toy-1.wav";
                beep();
                bg.style.backgroundColor = "#ffff66";
            }
            if(event.keyCode==87){
                sound.src = "sound2/umbrella_1.wav";
                beep();
                bg.style.backgroundColor = "#FFDAB9";
            }
            if(event.keyCode==69){
                sound.src = "sound2/velcro-strap-1.wav";
                beep();
                bg.style.backgroundColor = "#8FBC8F";
            }
            if(event.keyCode==82){
                sound.src = "sound2/water-splash-1.mp3";
                beep();
                bg.style.backgroundColor = "#556B2F";
            }
            if(event.keyCode==84){
                sound.src = "sound2/zapsplat_impact_metal_door_screwdriver_001_25749.mp3";
                beep();
                bg.style.backgroundColor = "#00FFFF";
            }
            if(event.keyCode==89){
                sound.src = "sound2/zapsplat_impact_metal_door_screwdriver_002_25750.mp3";
                beep();
                bg.style.backgroundColor = "#66CDAA";
            }
            if(event.keyCode==85){
                sound.src = "sound2/zapsplat_impact_metal_door_slam_against_25751.mp3";
                beep();
                bg.style.backgroundColor = "#AFEEEE";
            }
            if(event.keyCode==73){
                sound.src = "sound2/zipper_bag_2.wav";
                beep();
                bg.style.backgroundColor = "#20B2AA";
            }
            if(event.keyCode==79){
                sound.src = "sound2/zapsplat_impacts_hit_metallic_loud_clunk_reverb_001_25752.mp3";
                beep();
                bg.style.backgroundColor = "#6495ED";
            }
            if(event.keyCode==80){
                sound.src = "sound2/zapsplat_impact_metal_door_001_25747.mp3";
                beep();
                bg.style.backgroundColor = "#DB7093";
            }
       
       
            if(event.keyCode==32){
                result.innerHTML = 'Track <i class="fas fa-hand-point-up faa-shake animated"></i>';
                document.onkeydown = repeat;
            }

        }
    }
}

