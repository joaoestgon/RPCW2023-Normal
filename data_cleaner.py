import json
import argparse
import codecs


def add_id_field(json_array):
    for i, obj in enumerate(json_array):
        obj["_id"] = i
    return json_array


def main(input_file, output_file):
    # Read the input JSON file with UTF-8 encoding
    with codecs.open(input_file, 'r', encoding='utf-8') as f:
        json_data = f.read()

    # Parse the JSON array
    data = json.loads(json_data)

    # Add the "_id" field to each object
    data_with_ids = add_id_field(data)

    # Convert the modified data back to JSON
    json_with_ids = json.dumps(data_with_ids, indent=4, ensure_ascii=False)

    # Write the result to the output file with UTF-8 encoding
    with codecs.open(output_file, 'w', encoding='utf-8') as f:
        f.write(json_with_ids)

    print(f"Modified JSON data with IDs saved to {output_file}")


if __name__ == '__main__':
    # Parse command-line arguments
    parser = argparse.ArgumentParser(description='Add _id field to each object in a JSON array')
    parser.add_argument('input_file', help='Path to the input JSON file')
    parser.add_argument('output_file', help='Path to the output JSON file')
    args = parser.parse_args()

    # Call the main function with the provided arguments
    main(args.input_file, args.output_file)



