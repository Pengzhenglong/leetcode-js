// 盛最多水的容器
// Category	Difficulty	Likes	Dislikes
// algorithms	Medium (62.40%)	2994	-
// Tags
// Companies
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器。
// 示例 1：
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
// 示例 2：

// 输入：height = [1,1]
// 输出：1
// 示例 3：

// 输入：height = [4,3,2,1,4]
// 输出：16
// 示例 4：

// 输入：height = [1,2,1]
// 输出：2

/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

//  盛水容器最大面积，方式是双指针，但是实际用了排除，每次移动，
//  1.排除了‘n-1’次两两组合，
//  2.每次循环留出最大值做对比
//  细细理解吧

//  排除的n-1次两两组合，
//  1.移动前，留下的面积是width*最小高度1
//  2.移动后排除的n-1次，面积（width-1）*最小高度2
//  3.最小高度1>=最小高度2


var maxArea = function (height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {//双指针i，j循环height数组
    //i，j较小的那个先向内移动 如果高的指针先移动，那肯定不如当前的面积大
    const minHeight = height[i] < height[j] ? height[i++] : height[j--];
    // j-i+1表示为宽
    const area = (j - i + 1) * minHeight;//计算面积
    max = Math.max(max, area);//更新最大面积  
  }
  return max;
};
