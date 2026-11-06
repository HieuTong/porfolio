p = 'src/data/portfolioData.ts'
s = open(p, newline='').read()
print('line endings:', 'Windows (CRLF)' if '\r\n' in s else 'Unix (LF)')

def remove_object(s, marker):
    """Find the { ... } object that contains `marker` and cut it out, with one comma."""
    i = s.find(marker)
    if i == -1:
        return s, False
    start = s.rfind('{', 0, i)              # the object's opening brace
    depth, end = 0, start
    for end in range(start, len(s)):        # walk forward to its matching closing brace
        if s[end] == '{': depth += 1
        elif s[end] == '}':
            depth -= 1
            if depth == 0: break
    end += 1
    before = s[:start].rstrip()
    after = s[end:]
    if before.endswith(','):                 # not the first item: drop the comma before it
        s = before[:-1] + after
    else:                                    # first item: drop the comma after it instead
        s = s[:start] + after.lstrip().lstrip(',').lstrip(' \t')
    return s, True

for name, marker in [('On-Device Vision Benchmark', "'on-device-vision-benchmark'"),
                     ('IO Scholarship Community', "'IO Scholarship Community'")]:
    while True:                              # remove every copy, in case of duplicates
        s, ok = remove_object(s, marker)
        if not ok: break
        print('removed  ' + name)

open(p, 'w', newline='').write(s)
print('remaining:', s.count('on-device-vision-benchmark') + s.count('IO Scholarship'))
