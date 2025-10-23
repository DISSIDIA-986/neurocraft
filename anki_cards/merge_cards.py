import os
import csv

def merge_csv_files():
    """
    Merges all '*_cards.csv' files in the current directory into a single
    'all_anki_cards.csv' file.
    """
    output_filename = 'all_anki_cards.csv'
    # Get a list of all CSV files to merge
    csv_files = sorted([f for f in os.listdir('.') if f.endswith('_cards.csv')])
    
    if not csv_files:
        print("No '*_cards.csv' files found to merge.")
        return

    print(f"Found files to merge: {', '.join(csv_files)}")

    merged_data = []
    
    # Read the header from the first file and write it to the merged list
    try:
        with open(csv_files[0], 'r', newline='', encoding='utf-8') as f:
            reader = csv.reader(f)
            header = next(reader)
            merged_data.append(header)
    except Exception as e:
        print(f"Error reading header from {csv_files[0]}: {e}")
        return

    # Read data from all files
    for filename in csv_files:
        try:
            with open(filename, 'r', newline='', encoding='utf-8') as f:
                reader = csv.reader(f)
                next(reader)  # Skip header
                for row in reader:
                    # Ensure row is not empty
                    if row:
                        merged_data.append(row)
        except Exception as e:
            print(f"Error reading {filename}: {e}")

    # Write the merged data to the output file
    try:
        with open(output_filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerows(merged_data)
        print(f"\nSuccessfully merged {len(csv_files)} files into '{output_filename}'.")
        print(f"Total cards created: {len(merged_data) - 1}")
    except Exception as e:
        print(f"Error writing to {output_filename}: {e}")

if __name__ == '__main__':
    merge_csv_files()
