FROM python:3.6

WORKDIR /code

ADD requirements.txt /code

RUN pip install -r requirements.txt

ADD . /code

CMD python manage.py makemigrations && \
    python manage.py migrate && \
    python manage.py runserver 0.0.0.0:8000
