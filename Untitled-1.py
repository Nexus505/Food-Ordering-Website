def process_numbers():
    
    while True:
        try:
            input_line = input().strip()
            numbers = list(map(int, input_line.split()))
            
            for num in numbers:
                if num == 40:
                    return
                print(num, end=' ')
            print()
        except EOFError:
            break
        except ValueError:
            print("Invalid input. Please enter valid integers.")

process_numbers()
