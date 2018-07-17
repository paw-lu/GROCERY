from flask import Flask
from flask import render_template
from flask import request

from python_program import test_function

app = Flask(__name__)

@app.route("/hello", methods=['POST', 'GET'])
def index():
    greeting = "Hello world"

    if request.method == "POST":
        input = request.form.get('n-put')
        pizzaz = request.form.get('checkercheck', 'you didnt check')
        passthrough = input + " " + pizzaz
        return render_template("index.html", passthrough=passthrough)
    else:
        return render_template("hello_form.html")


if __name__ == "__main__":
    app.run(debug=True)
