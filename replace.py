#!/usr/bin/env python

import click


@click.command()
@click.argument("fp")
def main(fp):
    with open(fp) as f:
        contents = "".join(f.readlines())
    replaced = contents.replace("\\", "\\\\")
    with open(fp, "w") as f:
        f.write(replaced)


if __name__ == "__main__":
    main()
