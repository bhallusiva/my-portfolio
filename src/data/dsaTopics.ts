// Same grouping rules as scripts/gen_dsa.py, so new problems get a topic automatically.
const SETS: Record<string, number[]> = {
  Backtracking: [37, 39, 40, 46, 51, 78, 79, 90, 131, 216],
  'Binary search': [4, 74, 240, 1011, 1552, 1870],
  Greedy: [455, 860, 1029, 1833, 2410],
  'Recursion & DP': [50, 62, 70],
}

export function classify(num: number, slug: string): string {
  for (const [topic, nums] of Object.entries(SETS)) if (nums.includes(num)) return topic
  const parts = slug.split('-')
  if (
    parts.includes('bst') ||
    ['tree', 'path-sum', 'root-to-leaf', 'next-right-pointers', 'lowest-common-ancestor'].some((k) => slug.includes(k))
  )
    return 'Trees & BST'
  if (slug.includes('list') || slug.includes('nodes') || ['add-two-numbers', 'add-two-numbers-ii', 'rotate-list'].includes(slug))
    return 'Linked lists'
  if (['palindrom', 'anagram', 'string', 'roman', 'common-prefix', 'parenthes', 'isomorphic'].some((k) => slug.includes(k)))
    return 'Strings'
  return 'Arrays & math'
}