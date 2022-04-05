def brace(braces):
    solution = []
    counter = 0
    options = [('{', '}'), ('[', ']')]
    while len(braces) != len(solution):
        
        temp = []
        current = braces[counter]

        for i in current:
            temp.append(i)
        
        left, right = 0, len(temp) - 1
        boo = True
        while left < right:
            if (temp[left], temp[right]) in options:
                left, right = left + 1, right - 1
                boo = True
            else:
                boo = False
                break
            
        if boo == True:
            solution.append('YES')
            counter += 1 
        elif boo == False:
            solution.append('NO')
            counter += 1 

    return solution

rad = brace(['{[]}', '[}'])
print(rad)

def in_place_move(nums):
    # move 0 to the end of the array without duplicating list. I gues for in place you do not return anything 

    left, right = 0, len(nums) - 1
    while left < right:
        if not nums[left]:
            nums.append(nums.pop(left))
            # append the item to the end of the list using pop function
            right -= 1 
            continue
        
        left += 1

    return nums


grab = in_place_move([0, 3, 4, 0, 9])
print(grab)

example = [2, 3, 4, 5]
move = example[1]
# pop takes index posistion
# pop removes a item if given an index and append add it 
# to the end of list 
print(example.pop(0))
print(example)


def is_palinndrome(num):
    # return True or false if digit is a palindrom 
    og = num 
    trans = str(num)
    trans_reverse = trans[::-1]
    
    if int(trans_reverse) == og:
        return True
    else:
        return False

exam = is_palinndrome(343)
print(exam)

