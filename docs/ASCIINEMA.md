# Terminal demo (asciinema)

## Re-record

```bash
chmod +x scripts/record-demo.sh
COLS=100 LINES=28 asciinema rec --overwrite --idle-time-limit 2 \
  -c "bash scripts/record-demo.sh" demo.cast
```

## Upload to asciinema.org

```bash
asciinema upload demo.cast
```

**Permanent hosting:** link your CLI once (otherwise uploads expire after 7 days):

```bash
asciinema auth
```

Open the URL printed in the terminal (e.g. `https://asciinema.org/connect/...`) while logged in on asciinema.org, then approve.

After upload, update the recording ID in `README.md` (`asciinema.org/a/YOUR_ID`).

## Files

| File        | Purpose                                                                   |
| ----------- | ------------------------------------------------------------------------- |
| `demo.cast` | Source recording (committed to repo)                                      |
| `demo.gif`  | Static fallback for social posts (`python3 scripts/generate-demo-gif.py`) |
