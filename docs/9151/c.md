---
title: Leetcode
date: 2024-3-2
---

## 哈希 - 排序

[字母异位词分组](https://leetcode.cn/problems/group-anagrams/)：排序字符串，作 key

```c
map<string, vector<string>> m;
string key = sort(str.begin, str.end());
m[key].push_back(str);
```

[最长连续序列](https://leetcode.cn/problems/longest-consecutive-sequence/)：排序 vector，遍历判断

```c
sort(nums.begin(), nums.end());
for(int i = 0; i < nums.size(); i++){
    int temp = 1;
    while(i < nums.size()-1){
        if(nums[i]+1 < nums[i+1]){
            break;
        }
        if(nums[i]+1 == nums[i+1]){
            cur++;
        }
        i++
    }
    res = temp>res ? temp:res;
}
```

## 双指针 - 滑动窗口

[移动零](https://leetcode.cn/problems/move-zeroes/)：注意这个上下边界的问题，要是拿不准就多判断几次

- 因为要保持相对位置不变，只能从前往后遍历

```c
void moveZeroes(vector<int>& nums) {
    int n = nums.size();
    int i = 0, j = 0;
    while(i < n && j < n){
        while(i < n && nums[i] != 0){ // 找到 0
            i++;
        }
        j = i+1;
        if(j < n){ // 找到非 0
            while(j < n && nums[j] == 0){
                j++;
            }
        }
        if(j >= n){
            break;
        }
        nums[i] = nums[j];
        nums[j] = 0;
    }
}
```

[盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/)：双指针，从两边往中间收，移动较矮的挡板

[三数之和](https://leetcode.cn/problems/3sum/)：先排序，确定最小的一个，再从两边往中间收缩

vector 去重

```c
sort(nums.begin(), nums.end());
nums.erase(unique(nums.begin(), nums.end()), nums.end());
```

或者通过添加代码量跳过重复元素，这个代码很有意思，现在水平不如之前了

```c
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        vector<vector<int>> res;
        for(int i = 0; i < n; i++){
            if(nums[i] > 0){
                break;
            }
            if(i>0 && nums[i]==nums[i-1]){
                continue;
            }
            int l = i+1;
            int r = n-1;
            while(l < r){
                if(nums[i]+nums[l]+nums[r] == 0){
                    res.push_back({nums[i], nums[l], nums[r]});
                    while(l < r && nums[l] == nums[++l]) {}
                    while(l < r && nums[r] == nums[--r]) {}
                } else if(nums[i]+nums[l]+nums[r] < 0){
                    while(l < r && nums[l] == nums[++l]) {}
                } else {
                    while(l < r && nums[r] == nums[--r]) {}
                }
            }
        }
        return res;
    }
};
```

[找到字符串中所有字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)：对于 vector，可以直接这么比较

```c
vector<int> a(26);
vector<int> b(26);
cout << a==b << endl;
```

将输出 1，因为此时每个位置元素均为 0，则认为两个 vector 相等

