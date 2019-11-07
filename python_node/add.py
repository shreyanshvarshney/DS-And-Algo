import sys
prev = sys.stdin
sys.stdin = open("input.txt","r")
arr = map(int,input().split(","))
ans = sum(arr)
file = open("output.txt","w")
file.write(str(ans))
file.close()