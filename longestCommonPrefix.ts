/**
 * Finds the longest common prefix string amongst an array of strings.
 * Returns "" if there is no common prefix.
 *
 * Strategy: sort the array lexicographically, then compare only the
 * first and last strings — if a character matches there it matches
 * for every string in between.
 *
 * Time complexity:  O(n log n * k)  where n = number of strings,
 *                   k = average string comparison length during sorting.
 * Space complexity: O(n) for the copied array used before sort.
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  const sorted = [...strs].sort();
  const first = sorted[0];
  const last = sorted[sorted.length - 1];

  let i = 0;
  while (i < first.length && first[i] === last[i]) {
    i++;
  }

  return first.slice(0, i);
}
