function isPalindrome(s: string): boolean {

    let lower = s.toLowerCase();

    const regex = /[^a-z0-9]/g; 

    lower = lower.replaceAll(' ', '');
    lower = lower.replaceAll(regex, '');

    let f = 0, e = lower.length - 1;

    if (e < 0) {
        return true;
    }

    while (f < e) {
        if (lower[f] === lower[e]) {
            f++;
            e--;
        } else {
            return false;
        }
    }

    return true;
};