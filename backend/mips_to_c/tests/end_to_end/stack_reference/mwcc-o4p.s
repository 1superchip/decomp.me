.include "macros.inc"

.section .text  # 0x0 - 0x28

.global test
test:
/* 00000000 00000000  94 21 FF E8 */	stwu r1, -0x18(r1)
/* 00000004 00000004  38 A1 00 08 */	addi r5, r1, 8
/* 00000008 00000008  90 61 00 08 */	stw r3, 8(r1)
/* 0000000C 0000000C  38 01 00 0C */	addi r0, r1, 0xc
/* 00000010 00000010  7C 05 00 50 */	subf r0, r5, r0
/* 00000014 00000014  90 81 00 0C */	stw r4, 0xc(r1)
/* 00000018 00000018  7C 03 16 70 */	srawi r3, r0, 2
/* 0000001C 0000001C  7C 63 01 94 */	addze r3, r3
/* 00000020 00000020  38 21 00 18 */	addi r1, r1, 0x18
/* 00000024 00000024  4E 80 00 20 */	blr 
