import { describe, it, expect } from 'vitest';
import { sherlockAndTheValidString } from '.';

describe('Sherlock and the Valid String', () => {
  it('should return "NO" for string "aabbcd"', () => {
    expect(sherlockAndTheValidString('aabbcd')).toBe('NO');
  });

  it('should return "NO" for string "aabbccddeefghi"', () => {
    expect(sherlockAndTheValidString('aabbccddeefghi')).toBe('NO');
  });

  it('should return "YES" for string "abcdefghhgfedecba"', () => {
    expect(sherlockAndTheValidString('abcdefghhgfedecba')).toBe('YES');
  });

  it('should return "NO" for string "aaaabbcc"', () => {
    expect(sherlockAndTheValidString('aaaabbcc')).toBe('NO');
  });

  it('should return "YES" for string "aabbc"', () => {
    expect(sherlockAndTheValidString('aabbc')).toBe('YES');
  });

  it('should return "NO" for string "aaaaabc"', () => {
    expect(sherlockAndTheValidString('aaaaabc')).toBe('NO');
  });

  it('should return "YES" for string "abbac"', () => {
    expect(sherlockAndTheValidString('abbac')).toBe('YES');
  });

  it('should return "YES" for very long string', () => {
    expect(
      sherlockAndTheValidString(
        'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'
      )
    ).toBe('YES');
  });
});
