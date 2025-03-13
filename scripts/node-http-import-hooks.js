import { get } from 'node:http';

export function load(url, context, nextLoad) {
  if (url.startsWith('http://')) {
    return new Promise((resolve, reject) => {
      get(url, (res) => {
        let data = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () =>
          resolve({
            format: 'module',
            shortCircuit: true,
            source: data,
          })
        );
      }).on('error', (err) => reject(err));
    });
  }

  return nextLoad(url);
}
