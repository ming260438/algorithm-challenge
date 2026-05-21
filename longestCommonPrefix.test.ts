import { longestCommonPrefix } from "./longestCommonPrefix";

describe("longestCommonPrefix", () => {
  // Provided examples
  it('returns "fl" for ["flower","flow","flight"]', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  it('returns "" for ["dog","racecar","car"]', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  // Edge cases
  it("returns the string itself for a single-element array", () => {
    expect(longestCommonPrefix(["hello"])).toBe("hello");
  });

  it("returns empty string for an empty array", () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  it("returns empty string when one element is an empty string", () => {
    expect(longestCommonPrefix(["", "abc"])).toBe("");
  });

  it("returns the common string when all strings are identical", () => {
    expect(longestCommonPrefix(["abc", "abc", "abc"])).toBe("abc");
  });

  it("returns correct prefix for two strings", () => {
    expect(longestCommonPrefix(["interview", "inter"])).toBe("inter");
  });

  it("returns empty string when no characters match", () => {
    expect(longestCommonPrefix(["a", "b"])).toBe("");
  });
});
