import json
import pandas as pd

with open('src/data/eurfa_dictionary/abridged_dictionary.csv') as file:
    df = pd.read_csv(file)

df = df.fillna("None")
json_df = df.to_dict('records')

with open('src/data/eurfa_dictionary/abridged_dictionary.json', 'w') as file:
    json.dump(json_df, file, indent=2)