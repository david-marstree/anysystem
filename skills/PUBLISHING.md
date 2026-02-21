# Publishing the Agent Skill

Guide for publishing the AnySystem Design Agent Skill.

## Publishing to NPM

### 1. Prepare the Package

```bash
cd agent-skill

# Validate JSON
npm run validate

# Check package files
npm pack --dry-run
```

### 2. Login to NPM

```bash
npm login
```

### 3. Publish

```bash
# First time (scoped package)
npm publish --access public

# Updates
npm version patch  # or minor, major
npm publish
```

## Publishing to GitHub

### 1. Create a Release

```bash
git tag -a agent-skill-v0.0.48 -m "Agent Skill v0.0.48"
git push origin agent-skill-v0.0.48
```

### 2. Create GitHub Release

- Go to GitHub Releases
- Create new release from tag
- Attach `agent-skill.zip`
- Add release notes

## Distribution Methods

### Method 1: NPM Package (Recommended)

Users install via npm:
```bash
npm install @anysystem/design-agent-skill
```

Configure AI assistant to use:
```json
{
  "skills": {
    "anysystem-design": {
      "path": "node_modules/@anysystem/design-agent-skill"
    }
  }
}
```

### Method 2: GitHub Releases

Users download from GitHub:
```bash
wget https://github.com/your-org/anysystem-design/releases/download/v0.0.48/agent-skill.zip
unzip agent-skill.zip
```

### Method 3: Direct Clone

Users clone repository:
```bash
git clone https://github.com/your-org/anysystem-design.git
cd anysystem-design/agent-skill
```

### Method 4: CDN (for web-based AI)

Upload to CDN and provide URL:
```
https://cdn.example.com/anysystem-design-skill/0.0.48/skill-definition.json
```

## Integration Examples

### Claude Code

```bash
# Copy to project
mkdir -p .claude/skills
cp -r node_modules/@anysystem/design-agent-skill .claude/skills/anysystem-design
```

Or in `.claude/config.json`:
```json
{
  "skills": [
    "node_modules/@anysystem/design-agent-skill"
  ]
}
```

### GitHub Copilot

In workspace settings:
```json
{
  "github.copilot.advanced": {
    "customSkills": [
      "node_modules/@anysystem/design-agent-skill"
    ]
  }
}
```

### Custom GPT (ChatGPT)

1. Upload `skill-definition.json` as knowledge
2. Add system prompt from `gpt-instructions.md`

### LangChain

```python
from langchain.tools import load_tools

skill = load_tools([
    "node_modules/@anysystem/design-agent-skill"
])
```

## Updating the Skill

When library is updated:

### 1. Sync Version

Update version in:
- `agent-skill/package.json`
- `agent-skill/skill-definition.json`
- `agent-skill/README.md`

### 2. Update Documentation References

Check all markdown files reference correct docs paths.

### 3. Rebuild Examples

Update examples if component APIs changed.

### 4. Test

Test with actual AI assistants before publishing.

### 5. Publish

```bash
npm version patch
npm publish
git tag agent-skill-v0.0.XX
git push --tags
```

## Versioning Strategy

- **Major** (X.0.0): Breaking changes in library
- **Minor** (0.X.0): New components added
- **Patch** (0.0.X): Documentation updates, bug fixes

Match library version for consistency.

## Marketing the Skill

### 1. README Badges

Add to main README:
```markdown
[![AI Agent Skill](https://img.shields.io/npm/v/@anysystem/design-agent-skill)](https://www.npmjs.com/package/@anysystem/design-agent-skill)
```

### 2. Documentation

Add section in main docs:
```markdown
## AI Assistant Integration

Use with AI assistants via our agent skill:
npm install @anysystem/design-agent-skill
```

### 3. Announce

- Tweet about it
- Post on Reddit (r/reactjs, r/webdev)
- Dev.to article
- Hacker News
- Product Hunt

### 4. Examples

Create video showing:
- Installing the skill
- Using with Claude/Copilot
- Generating component code
- Getting help

## Quality Checklist

Before publishing:

- [ ] Version numbers match library
- [ ] All documentation paths correct
- [ ] JSON files valid
- [ ] Examples tested
- [ ] README complete
- [ ] package.json correct
- [ ] Files list correct
- [ ] Keywords appropriate
- [ ] License specified
- [ ] Repository links work
- [ ] No sensitive data
- [ ] Tested with at least one AI assistant

## Support

After publishing:

1. Monitor issues on GitHub
2. Update with library changes
3. Collect feedback from users
4. Improve based on usage patterns

## License

Same as main library (check main package.json).

## Links

- NPM: https://www.npmjs.com/package/@anysystem/design-agent-skill
- GitHub: https://github.com/your-org/anysystem-design/tree/main/agent-skill
- Documentation: https://your-docs-url.com

---

**Ready to publish?** Run through the checklist above!
