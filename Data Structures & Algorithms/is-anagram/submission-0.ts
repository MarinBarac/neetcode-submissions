class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false
        }

        const sMap: Record<string, number> = {};
        const tMap: Record<string, number> = {};

        for (let i = 0; i < s.length; i++) {
            let c = s[i];

            if(!sMap[c]) {
                sMap[c] = 1
            } else {
                sMap[c] += 1
            }

            c = t[i];
            if(!tMap[c]) {
                tMap[c] = 1
            } else {
                tMap[c] += 1
            }
        }


        for (let sKey of Object.keys(sMap)) {
            if (sMap[sKey] !== tMap[sKey]) {
                return false;
            }
        }

        return true;
    }
}
