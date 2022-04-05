def find_odd_num(low, high):
    total = [x for x in range(low, high + 1)]
    # once i have looped over all the number i will append odd nums to a list and return len - 1 for total amount of odd numbers bxc√©im,burlesque
    final = []
    for x in total:
        if (x % 2) != 0:
            final.append(x)

    return final, len(final) 


find_odd = find_odd_num(3, 7)
print(find_odd)


def find_odd_num_amount(high, low):
    if low % 2 == 0:
        return (high-low+1)//2
    return (high-low)//2 + 1

find_odd_num = find_odd_num_amount(3, 7)
print(find_odd_num)