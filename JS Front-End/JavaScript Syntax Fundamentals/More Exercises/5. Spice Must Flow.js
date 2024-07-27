function spicesMustFlow(yield){
    let days = 0;
    let total_spice_collected = 0

    while(yield >= 100){

        days += 1;
        total_spice_collected += yield;
        yield -= 10;

        if (total_spice_collected >= 26){
            total_spice_collected -= 26
        }
    }

    if (total_spice_collected >= 26){
                total_spice_collected -= 26
            }

    console.log(days);
    console.log(total_spice_collected)
}