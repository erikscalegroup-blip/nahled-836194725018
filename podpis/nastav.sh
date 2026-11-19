#!/bin/bash
# M-TEQ: nastavenie e-mailoveho podpisu v aplikacii Mail (macOS)
# Apple Mail pri ulozeni podpisu vytiahne logo z tabulky. Tento skript zapise
# podpis priamo do suboru podpisu a subor zamkne, aby ho Mail neprepisal.

echo ""
echo "Nastavujem podpis M-TEQ..."
osascript -e 'tell application "Mail" to quit' >/dev/null 2>&1
sleep 3

BODY='<body style="word-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;"><table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;"><tr><td style="padding:0 16px 0 0;vertical-align:middle;font-family:Barlow,Helvetica Neue,Helvetica,Arial,sans-serif;"><img src="https://mteq.sk/podpis/mteq-logo-56.png" width="56" height="56" alt="M-TEQ" style="display:block;border:0;outline:none;text-decoration:none;width:56px;height:56px;"></td><td style="border-left:2px solid #dce8f0;padding:0 0 0 16px;vertical-align:middle;font-family:Barlow,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px;line-height:1.45;color:#3E474F;"><div style="font-family:Barlow,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:16px;line-height:1.3;font-weight:700;color:#1C2227;">Ing. M&#225;rio Mi&#353;&#225;k</div><div style="font-family:Barlow,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px;line-height:1.45;color:#3E474F;margin-top:2px;">M-TEQ, s.r.o. &#183; Chladenie a klimatiz&#225;cie</div><div style="font-family:Barlow,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px;line-height:1.45;margin-top:2px;"><a href="tel:+421902639923" style="font-family:Barlow,Helvetica Neue,Helvetica,Arial,sans-serif;color:#0B6BB5;font-weight:600;text-decoration:none;">+421 902 639 923</a></div><div style="font-family:Barlow,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px;line-height:1.45;margin-top:2px;"><a href="mailto:misak@mteq.sk" style="font-family:Barlow,Helvetica Neue,Helvetica,Arial,sans-serif;color:#3E474F;text-decoration:none;">misak@mteq.sk</a><span style="color:#8794A1;"> &#183; </span><a href="https://mteq.sk" style="font-family:Barlow,Helvetica Neue,Helvetica,Arial,sans-serif;color:#3E474F;text-decoration:none;">mteq.sk</a></div><div style="font-family:Barlow,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px;line-height:1.45;color:#3E474F;margin-top:2px;">Moyzesova 4, 902 01 Pezinok</div></td></tr></table><br></body>'

found=0; denied=0
for d in "$HOME/Library/Mobile Documents/com~apple~mail/Data/V"*"/MailData/Signatures" "$HOME/Library/Mail/V"*"/MailData/Signatures"; do
  [ -d "$d" ] || continue
  if ! ls "$d" >/dev/null 2>&1; then denied=1; continue; fi
  for f in "$d"/*.mailsignature; do
    [ -f "$f" ] || continue
    grep -q "Moyzesova" "$f" 2>/dev/null || continue
    chflags nouchg "$f" 2>/dev/null
    mkdir -p "$HOME/Documents/M-TEQ podpis zaloha"
    cp "$f" "$HOME/Documents/M-TEQ podpis zaloha/$(date +%Y%m%d-%H%M%S)-$(basename "$f")"
    if head -1 "$f" | grep -q ':'; then
      headers=$(sed '/^$/q' "$f" | sed '/^$/d' | sed 's/^Content-Transfer-Encoding:.*/Content-Transfer-Encoding: 7bit/')
    else
      headers=$(printf 'Content-Transfer-Encoding: 7bit\nContent-Type: text/html;\n\tcharset=utf-8\nMime-Version: 1.0')
    fi
    printf '%s\n\n%s\n' "$headers" "$BODY" > "$f"
    chflags uchg "$f" 2>/dev/null
    found=$((found+1))
  done
done

if [ "$found" -gt 0 ]; then
  echo "Hotovo. Podpis je nastaveny. Otvaram Mail."
  open -a Mail
elif [ "$denied" -eq 1 ]; then
  echo "Terminal nema pristup k priecinku Mail."
  echo "Otvorte Nastavenia systemu > Sukromie a bezpecnost > Plny pristup k disku,"
  echo "zapnite Terminal, Terminal zavrite, znova otvorte a prikaz spustite este raz."
else
  echo "Nenasiel som podpis M-TEQ."
  echo "V Mail si najprv vytvorte podpis zo stranky mteq.sk/podpis/podpis.html, Mail zavrite a prikaz spustite znova."
fi
echo ""
