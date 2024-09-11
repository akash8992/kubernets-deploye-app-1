from flask import Flask, request, jsonify
import os
import subprocess

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    if request.method == 'POST':
        data = request.json
        # Pull the latest code from GitHub
        os.system('cd /path/to/your/app && git pull')
        # Build and push the Docker image
        subprocess.call(['/bin/bash', '/path/to/deploy-script.sh'])
        return jsonify({'status': 'success'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
