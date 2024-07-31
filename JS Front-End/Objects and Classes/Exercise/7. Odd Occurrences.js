function oddOcurrences(string) {
    const occurrenceCount = {};
    let array = string.split(' ');
    array =array.map((a) => String(a).toLowerCase());

    for (let word of array) {
        if (!(word in occurrenceCount)) {
            occurrenceCount[word] = 0;
        }
        occurrenceCount[word] += 1;
    }

    let output = [];
    for (const word of array) {
        if (occurrenceCount[word] % 2 !== 0 && !(output.includes(word))) {
            output.push(word);
        }
    }
    console.log(output.join(' '));
}

oddOcurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
