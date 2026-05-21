# Technical Test: Longest Common Prefix

## Problem

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

### Examples

- Input: ["flower", "flow", "flight"] -> Output: "fl"
- Input: ["dog", "racecar", "car"] -> Output: ""

### Constraints

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] contains only lower-case English letters

## Solution Approach

Implementation is in longestCommonPrefix.ts.

The function uses this idea:

1. Sort a copy of the input array lexicographically.
2. After sorting, only compare the first string and the last string.
3. The common prefix between those two strings is the common prefix for the whole array.

Why this works:

- In sorted order, strings that are most different are at the boundaries.
- If the first and last strings share a prefix of length k, every string between them must also share that prefix.
- If first and last differ at position i, no full-array prefix can go beyond i.

## Complexity

- Let n be the number of strings and m be the average string comparison length.
- Sorting dominates runtime: O(n log n * m) in the worst case.
- Prefix scan between first and last is linear in prefix length.
- Extra space is O(n) for copying before sort.

## How To Run

```bash
npm install
npm test
```

## Test Coverage Summary

Current tests in longestCommonPrefix.test.ts cover:

- The 2 provided examples
- Single-element array
- Empty input array (defensive case)
- Empty string inside input
- All strings identical
- Two-string prefix case
- No matching first character

All tests currently pass.

## คำอธิบายภาษาไทย

### โจทย์

ให้เขียนฟังก์ชันเพื่อหา "คำนำหน้าร่วมที่ยาวที่สุด" (Longest Common Prefix) จากอาร์เรย์ของสตริง

ถ้าไม่มีคำนำหน้าร่วมกันเลย ให้คืนค่าเป็นสตริงว่าง ""

### แนวทางการแก้ปัญหา

โค้ดอยู่ในไฟล์ longestCommonPrefix.ts

แนวคิดที่ใช้:

1. สร้างสำเนาของอาร์เรย์แล้วเรียงลำดับแบบตัวอักษร (lexicographical sort)
2. หลังเรียงแล้ว ให้เปรียบเทียบแค่สตริงตัวแรกกับตัวสุดท้าย
3. คำนำหน้าที่สองตัวนี้มีร่วมกัน จะเป็นคำนำหน้าร่วมของทั้งอาร์เรย์

เหตุผลที่วิธีนี้ถูกต้อง:

- หลัง sort สตริงที่แตกต่างกันมากที่สุดจะอยู่ที่ขอบ (ตัวแรกและตัวสุดท้าย)
- ถ้าตัวแรกกับตัวสุดท้ายยังมี prefix ร่วมกันยาว k ตัวอักษร สตริงทั้งหมดที่อยู่ตรงกลางก็ต้องมี prefix ส่วนนี้ด้วย
- ถ้าต่างกันที่ตำแหน่ง i หมายความว่า prefix ร่วมของทั้งชุดไปได้ไม่เกินตำแหน่ง i

### ความซับซ้อน (Complexity)

- กำหนดให้ n คือจำนวนสตริง และ m คือความยาวเฉลี่ยที่ใช้ตอนเปรียบเทียบสตริง
- การ sort เป็นส่วนที่ใช้เวลาหลัก: O(n log n * m) ในกรณีเลวร้าย
- การไล่เทียบ prefix ระหว่างตัวแรกกับตัวสุดท้ายเป็นเชิงเส้นตามความยาว prefix
- ใช้หน่วยความจำเพิ่ม O(n) สำหรับอาร์เรย์สำเนาที่นำมา sort

### การรัน

```bash
npm install
npm test
```

### สรุปการทดสอบ

ชุดทดสอบใน longestCommonPrefix.test.ts ครอบคลุม:

- ตัวอย่างจากโจทย์ทั้ง 2 เคส
- กรณีมีสตริงเดียว
- กรณีรับอาร์เรย์ว่าง (defensive case)
- กรณีมีสตริงว่างอยู่ในอินพุต
- กรณีสตริงเหมือนกันทั้งหมด
- กรณีมี 2 สตริงที่มี prefix ร่วมบางส่วน
- กรณีไม่ตรงกันตั้งแต่ตัวอักษรแรก

ผลปัจจุบัน: เทสผ่านทั้งหมด
