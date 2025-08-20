npm init -y
npm i
npm i express dotenv cors axios cloudinary multer
npm i --save-dev nodemon

npm i @neondatabase/serverless

## db table

CREATE TABLE creations (
id serial primary key,
user_id text not null,
prompt text not null,
content text not null,
type text not null,
publish boolean default false,
likes text[] default '{}',
created_at timestamptz default now(),
updated_at timestamptz default now()
)

npm install @clerk/express

npm i openai

npm i @huggingface/inference

npm i pdf-parse