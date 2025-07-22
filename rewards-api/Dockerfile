FROM ruby:3.4

WORKDIR /app

RUN apt-get update -qq && apt-get install -y sqlite3

COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install

COPY . .

ENV RAILS_ENV=production

EXPOSE 3000
