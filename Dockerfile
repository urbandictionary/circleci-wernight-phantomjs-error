FROM wernight/phantomjs

WORKDIR /code
COPY . /code/

CMD ["phantomjs", "./script.js"]
