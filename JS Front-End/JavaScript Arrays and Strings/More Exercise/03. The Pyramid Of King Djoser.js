function calculateMaterial(base, increment){
    let requiredStone = 0;
    let requiredMarbel = 0;
    let requiredLapiz = 0;
    let requiredGold = 0;
    let counter = 0;

    for(let currentStep = base; currentStep > 0; currentStep -= 2){
        counter += 1

        let currentStepArea = currentStep * currentStep

        if(currentStep <= 2){
            requiredGold += currentStepArea * increment;
            break;
        }


        currentlyRequiredStone = ((currentStep - 2) * (currentStep - 2));
        currentlyRequiredLapizOrMarbel = currentStep * currentStep
        requiredStone += currentlyRequiredStone * increment;


        if(counter % 5 == 0){
            requiredLapiz += (currentStepArea - currentlyRequiredStone) * increment;
        } else{
            requiredMarbel += (currentStepArea - currentlyRequiredStone) * increment;
        }
    }


    console.log(`Stone required: ${Math.ceil(requiredStone)}`);
    console.log(`Marble required: ${Math.ceil(requiredMarbel)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(requiredLapiz)}`);
    console.log(`Gold required: ${Math.ceil(requiredGold)}`);
    console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);

}
calculateMaterial(11, 1);